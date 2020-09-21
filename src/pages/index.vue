<template>
  <div class="container">
    <div>
      <logo class="logo" />

      <nuxt-content :document="page" />

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
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
  },

  async asyncData ({ $content }) {
    const page = await $content('home').fetch()

    return {
      page,
    }
  },

  data: () => ({
    page: null,
  }),
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  margin-bottom: 1rem;
}

.links {
  margin-top: 2rem;
}
</style>
