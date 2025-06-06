import { createRouter, createWebHistory } from 'vue-router'
import WelcomeScreen from '../views/WelcomeScreen.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeScreen,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
