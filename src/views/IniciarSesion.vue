<template>
    <div class="iniciar-sesion">
        <FormTest />
    </div>
  </template>
  
  <script>
  import { useStore as contadorVue3 } from 'Microfrontend-vue3/remoteStore'
  import FormTest from 'Microfrontend-vue3/FormTest'
  
  export default {
    components: {
      FormTest,
    },
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
    .iniciar-sesion {
      padding-top: 6rem;
      display: flex;
      justify-content: center;
      height: 100vh;
      align-items: center;
    }
  }
  </style>
  