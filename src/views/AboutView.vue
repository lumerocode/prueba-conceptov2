<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <button @click="update" >ACTUALIZA CAUSITA</button>
  </div>
</template>

<script>
import { useStore as contadorVue3 } from 'Microfrontend-vue3/remoteStore'


export default {
  data() {
    return {
      message: '¡Hola Mundo!',
    };
  },
  methods: {
    update(){
      console.log(contadorVue3.state.token)
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
