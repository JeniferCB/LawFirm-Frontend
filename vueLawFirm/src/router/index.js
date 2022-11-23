import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import HomeView from '../views/HomeView.vue'
import ClientAppointments from '../views/ClientAppointments.vue'
import LawyerListClient from '../views/LawyerListClient.vue'
import LayerListAppointment from '../views/LayerListAppointment.vue'
import LawyerPendingAppointments from '../views/LawyerPendingAppointments.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: ClientAppointments,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/listclient',
      name: 'listclient',
      component: LawyerListClient,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/listappointment',
      name: 'listappointment',
      component: LayerListAppointment,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/listpending',
      name: 'listpending',
      component: LawyerPendingAppointments,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

import { useAuthStore } from '../stores/store'

router.beforeEach((to, _, next) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
