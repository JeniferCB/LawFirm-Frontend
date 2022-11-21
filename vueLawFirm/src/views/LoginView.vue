<template>
    <main>
      <h1>LOGIN</h1>
  
      <form class="form">
        <label>
          EMAIL
          <input type="email" v-model="newUser.email"/>
        </label>

        <label>
          PASSWORD
          <input type="password" @keydown.prevent.enter="loginUser()" v-model="newUser.password" />
        </label>
  
        <button @click.prevent="loginUser()">LOGIN</button>
      </form>
    </main>
  </template>

  <script>
  import API from '../services/api.js';
  
  export default {
    data() {
      return {
        newUser: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async loginUser() {
        const response = await API.login(this.newUser)
        if (response.error) {
          alert('wrong username/password')
        } 
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  