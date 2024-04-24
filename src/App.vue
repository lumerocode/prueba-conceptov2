<template>
  <div>
  <div class="nav-bar">        
    <NavBar/>
  </div>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router';
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