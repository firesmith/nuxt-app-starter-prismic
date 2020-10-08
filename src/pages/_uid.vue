<template>
  <div>
    <h1>{{ $prismic.asText(doc.title) }}</h1>
    <prismic-image :field="doc.banner_image" width="200" />
    <prismic-rich-text :field="doc.content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData ({ $prismic, error, params }) {
    try {
      const { data: doc } = await $prismic.api.getByUID('page', params.uid)
      return {
        doc,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data: () => ({
    doc: null,
  }),
})
</script>
