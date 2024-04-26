<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <RouterLink class="nav-link active" aria-current="page" to="/">
      <img src="@/assets/img/icon-logo.png" width="50" height="50"/>
    </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/conoceme">Conóceme</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/otras-cosas">Otras cosas</RouterLink>
        </li>
      </ul>
      <div class="d-flex flex-column position-relative">
        <button class="btn btn-outline-success" @click="showModalLogin()">Iniciar sesion</button>
        <div v-if="displayModalLogin" class="modal-login position-fixed top-0 start-0">
          <div class="content-modal">         
            <Login
            @loginSuccess="loginSuccess"    
            />
          </div> 
          <div class="bg-modal" @click="showModalLogin()"></div>          
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login  from 'Microfrontend-vue3/Login'
import { useAuthentication } from '@/composables/useAuthentication'
import router from '@/router';

export default defineComponent({
  components:{
    Login
  },
  setup () {
    const displayModalLogin = ref(false);
    const { getToken, initSessionMain } = useAuthentication()

    function showModalLogin() {
      return displayModalLogin.value = !displayModalLogin.value
    }

    function loginSuccess(token: string){
      initSessionMain(token)
      showModalLogin()
      router.push('/app/dashboard')
    }

    return {
      showModalLogin,
      displayModalLogin,
      getToken,
      loginSuccess
    }
  }
})
</script>

<style scoped lang="scss">
.bg-modal{
  background-color: rgba(19,19,71,.2);
  position: fixed;
  width: 100%;
  top: 0;
  height: 100%;
  z-index: -1;
}
.modal-login{  
  width: 100%;
  height: 100%;
  z-index: 10;
}

.content-modal{
  position: absolute;
  width: 320px;
  margin-top: 4rem;
  top: 0;
  right: 1rem;
}
</style>