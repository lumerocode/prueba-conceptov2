<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div class="d-flex">
        <button class="btn btn-outline-success" @click="showModalLogin()">Iniciar sesion</button>
        <div v-if="displayModalLogin">

        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const displayModalLogin = ref(false);

    function showModalLogin() {
      return displayModalLogin.value = !displayModalLogin.value
    }

    return {
      showModalLogin,
      displayModalLogin
    }
  }
})
</script>

<style scoped>

</style>