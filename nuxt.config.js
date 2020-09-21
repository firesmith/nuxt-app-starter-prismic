/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import config from './src/content/site_config.json'

export default {
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
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Headers of the page
   */
  head: {
    title: config.title || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: config.description || process.env.npm_package_description || '',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: config.theme.primary },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    ['nuxt-rfg-icon', { masterPicture: config.icon }],
    '@nuxtjs/pwa',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/composition-api'],

  pwa: {
    icons: false,
  },

  srcDir: 'src',
  target: 'static',
}
