<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/iniciar-sesion">Iniciar sesión</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;
  width: 100%;
  background-color: #54BD95;
  height: 6rem;
  z-index: 10;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    font-size: 1rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a{
    text-decoration: none;
    color: #fff;
    transition: 0.4s;
    padding: 3px;
  }
}
</style>
