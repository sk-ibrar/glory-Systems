import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/pca',
      name: 'pca',
      component: () => import('../components/servicesSectionComponents/processControlAutomation.vue')
    },
    {
      path: '/electrical-control-design',
      name: 'electrical-control-design',
      component: () => import('../components/servicesSectionComponents/electricalControlDesign.vue')
    }
  ]
});

export default router;