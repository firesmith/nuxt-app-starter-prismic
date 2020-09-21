<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <nuxt-content :document="page" />

    <nuxt-link to="/">
      Home
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    error: {
      default: () => ({ message: 'Unknown error', statusCode: 500 }),
      type: Object,
    },
  },
})
</script>
