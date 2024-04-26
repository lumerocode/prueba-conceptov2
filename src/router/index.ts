import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router';
import authMiddleware from '@/middleware/AuthMiddleware';
import DefaultLayout from '@/layout/DefaultLayout.vue';
import HomePage from '@/pages/home/index.vue';
import NewHelloworld from '@/components/NewHelloworld.vue';
import LoginPage from '@/components/LoginPage.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Public',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomePage
        }
      ]
    },
    {
      path:'/login',
      name: 'Login',
      component: LoginPage
    },    
    {
      path: '/app/',
      name: 'app',
      component: DefaultLayout, // <- Aqui poner tu layout para intranet
      beforeEnter: authMiddleware,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: NewHelloworld,
        },
        {
          path: 'invertir',
          name: 'Invertir',
          component: NewHelloworld,
        },

      ]
    },
  ]
});


export default router;

