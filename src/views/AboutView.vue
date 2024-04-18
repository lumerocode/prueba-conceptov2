<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <button @click="update" >ACTUALIZA CAUSITA</button>
  </div>
</template>

<script>
import { store as contadorVue2 } from 'Microfrontend-vue2/remoteStore'
import { useStore as dashboardStore } from 'Microfrontend-vue3/remoteStore'

export default {
  data() {
    return {
      message: '¡Hola Mundo!',
    };
  },
  methods: {
    update(){
      console.log(contadorVue2.state.contador)
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
