<template>
  <div>
    <h1>{{ name }}</h1>
    <input v-model="name">
    <input v-model.number="state.multi" type="number">
    {{ state.result }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from '@vue/composition-api'

interface IState {
  multi: number,
  result: number
}

export default defineComponent({
  props: {
    amount: {
      required: true,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    },
  },
  setup ({ amount, title }) {
    const state: IState = reactive({
      multi: 1,
      result: computed(() => amount * state.multi),
    })

    const name = ref(title)
    return {
      name,
      state,
    }
  },
})
</script>
