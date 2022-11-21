<template>
    <main>
      <h1>SIGNUP</h1>
      <form class="form">
        <label>
        NAME
        <input type="text" v-model="newUser.name" />
      </label>
      <label>
        LASTNAME
        <input type="text" v-model="newUser.surname"/>
      </label>
      <label>
        PHONE
        <input type="text" v-model="newUser.phone"/>
      </label>
      <label>
        DNI
        <input type="text" v-model="newUser.identification"/>
      </label>
      <label>
        EMAIL
        <input type="email" v-model="newUser.email"/>
      </label>
        
      <label>
        PASSWORD
        <input type="password" v-model="newUser.password" />
      </label>
      
      <button @click.prevent="signupUser()">SIGNUP</button>
    </form>
  </main>
</template>

<script>
import API from '../services/api.js';

export default {
  data() {
    return {
      newUser: {
        name: '',
        lastname: '',
        phone:'',
        dni: '',
        email: '',
        password: ''
      }
    }
},
  methods: {
    async signupUser() {
      const response = await API.signup(this.newUser)
      if (response.error) {
        alert('Error creating account')
      } 
    }
  }
};
</script>

<style>
</style>

 