/* eslint-disable @typescript-eslint/explicit-module-boundary-types, no-console */
import { promises as fs } from 'fs'
import PrismicJs from 'prismic-javascript'

import storedConfig from './src/content/site_config.json'

const endpoint = `https://${process.env.PRISMIC_REPO || 'firesmith'}.cdn.prismic.io/api/v2`

export default async ({ command }) => {
  let config
  if (command === 'dev') {
    config = storedConfig
    config.fromFile = true
  } else {
    try {
      const api = await PrismicJs.api(endpoint)
      config = await api.getSingle('site_config')
      if (config) {
        console.log('site config fetch successful', config.data)
        await fs.writeFile('./src/content/site_config.json', JSON.stringify(config), 'utf-8')
        console.log('config written successfully')
      }
    } catch (error) {
      console.error('Prismic api', error)
    }
  }

  const {
    description,
    icon,
    primary,
    title,
  } = config.data
  return {
    /*
    ** Build configuration
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      extend (config, ctx) {
        if (ctx.isDev) {
          config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        }
      },
    },

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
      // Doc: https://github.com/nuxt-community/eslint-module
      '@nuxt/typescript-build',
      '@nuxtjs/eslint-module',
      '@nuxtjs/prismic',

    ],
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Headers of the page
    */
    head: {
      title: title || process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: description || process.env.npm_package_description || '',
        },
      ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: primary },
    /*
    ** Nuxt.js modules
    */
    modules: [
      '@nuxt/content',
      ['nuxt-rfg-icon', { masterPicture: icon ? icon.url : '~/static/icon.png' }],
      '@nuxtjs/pwa',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: ['@/plugins/composition-api'],

    prismic: {
      apiOptions: {
        // example resolving documents with type `page` to `/:uid`
        routes: [
          {
            path: '/:uid',
            type: 'page',
          },
        ],
      },
      deferLoad: true,
      endpoint,
      linkResolver ({ isBroken, type, uid }) {
        if (isBroken) {
          return '/not-found'
        }

        switch (type) {
          case 'homepage':
            return '/'
          case 'page':
            return '/' + uid
          default:
            return '/not-found'
        }
      },
      preview: command === 'dev' || process.env.PRISMIC_PREVIEW,
    },

    pwa: {
      icons: false,
    },

    srcDir: 'src',
    target: 'static',
  }
}
