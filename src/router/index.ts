import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
//import store from 'Microfrontend-vue3/remoteStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
});

/*
router.beforeEach((to, from, next) => {
  if (store.state.token) {
    console.log(store.state.token)
  } else {
    console.log(store)
    console.log('nada')
    next('/');
  }
});
*/


export default router;

