import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { useAuthentication } from '@/composables/useAuthentication'
import NewHelloworld from '@/components/NewHelloworld.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    
    {
      path: '/app/dashboard',
      name: 'dashboard',
      component: NewHelloworld,
      meta: { requiresAuth: true }
    },
  ]
});


router.beforeEach((to, from, next) => {

  const { getToken } = useAuthentication()
  const isAuthenticated = getToken.value;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next();
  }
});


export default router;

