
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/views/HomeView.vue'
import AboutView from '../components/views/about.vue'
import Register from '../components/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
