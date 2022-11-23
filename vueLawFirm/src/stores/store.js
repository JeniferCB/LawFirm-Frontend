import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core' // sincroniza pinia con localStorage

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null),
      email: useStorage('email', null),
      role: useStorage('role', null),
      id: useStorage('userId', null)
    }
  },
  getters: {
    isLoggedIn() {
      return this.token != null
    },
    isAdmin() {
      return this.role === 'admin'
    },
    userEmail() {
      return this.email
    },
    userRole() {
      return this.role
    },
    userId() {
      return this.id
    },
    userToken() {
      return this.token
    }
  },
  actions: {
    logout() {
      this.token = null
      this.email = null
      this.role = null
      this.id = null
    },
    login(token, email, role, id) {
      this.token = token
      this.email = email
      this.role = role
      this.id = id
    },
  },
})