<template>
  <div>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router';

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>