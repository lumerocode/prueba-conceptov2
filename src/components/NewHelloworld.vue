<template>
  <div>
    <div id="vue2HelloWorld"></div>
    <vue2HelloWorld/>
  </div>
</template>

<script>
import { vue2ToVue3 } from '@/utils';
import HelloWorld from 'Microfrontend-vue2/HelloWorld'

export default {
  components:{
    vue2HelloWorld: vue2ToVue3(HelloWorld, 'vue2HelloWorld')
  },  

  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>