<template>
  <div>
    <div>
      <NavBar/>
    </div>
    <section>
      <RouterView/>
    </section>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components:{
    NavBar
  }, 
  setup () {

    return {}
  }
})
</script>

<style scoped>

</style>