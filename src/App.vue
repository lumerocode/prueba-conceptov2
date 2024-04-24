<template>
  <div class="nav-bar">        
    <NavBar/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  components:{
    NavBar,
  },
  setup () {   

    return {}
  }
})
</script>

<style scoped>
.nav-bar{
  width: 100%;
}
</style>