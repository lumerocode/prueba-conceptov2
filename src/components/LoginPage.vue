<template>
  <div>
    Inicio de Sesion - redirect
    <Login
    @loginSuccess="loginSuccess" 
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, type Router } from 'vue-router'
import { useAuthentication } from '@/composables/useAuthentication'
import Login  from 'Microfrontend-vue3/Login'
import router from '@/router'

export default defineComponent({
  components:{
    Login
  },
  setup () {
    const { initSessionMain} = useAuthentication()   
    const route = useRoute()
    const query = route.query.redirect_to || '/'

    const loginSuccess = (token: string) => {
      initSessionMain(token)
      
      const location = {
        path: query as string 
      }
      router.push(location)
    }

    return {
      loginSuccess
    }
  }
})
</script>

<style scoped>

</style>