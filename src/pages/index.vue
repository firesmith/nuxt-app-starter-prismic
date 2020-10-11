<template>
  <div class="page-wrapper">
    <prismic-image :field="content.banner_image" width="100%" />
    <div class="container">
      <div>
        <prismic-rich-text :field="content.title" />
        <prismic-rich-text :field="content.main_content" />

        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $prismic, error }) {
    try {
      return {
        content: (await $prismic.api.getSingle('homepage')).data,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data: () => ({
    content: null,
  }),
})
</script>

<style>
.page-wrapper {
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}

.links {
  margin-top: 2rem;
}
</style>
