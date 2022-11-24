<template>
  <div class="format">
    <div class="form">
      <div>
        <label>NAME</label>
        <input type="text" v-model="newUser.name" />
      </div>
      <div>
        <label>LASTNAME</label>
        <input type="text" v-model="newUser.lastname" />
      </div>
      <div>
        <label>PHONE</label>
        <input type="text" v-model="newUser.phone" />
      </div>
      <div>
        <label>DNI</label>
        <input type="text" v-model="newUser.dni" />
      </div>
      <div>
        <label>EMAIL</label>
        <input type="email" v-model="newUser.email" />
      </div>
      <div>
        <label>PASSWORD</label>
        <input type="password" v-model="newUser.password" />
      </div>
      <div class="register">
        <RouterLink to="appointments" class="btn btn-dark" @click.prevent="signupUser()">SIGNUP</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../services/api.js';
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      newUser: {
        name: '',
        lastname: '',
        phone: '',
        dni: '',
        email: '',
        password: '',
        role: 'user'
      },
      store: useAuthStore()
    }
  },
  methods: {
    async signupUser() {
      const response = await API.signup(this.newUser)
      if (response.error) {
        alert('Error creating account')
      } else {
        this.store.login(response.token, response.email, response.rol, response.id)
        this.$router.push('appointments')
      }
    }
  }
};
</script>

<style>
.format {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, rgba(114, 159, 196) 0%, rgb(30, 59, 84));
}

.form {
  display: flex;
  flex-direction: column;
  height: calc(90% + 1vh);
  width: calc(60% + 1vw);
  border: 3px solid rgb(10, 42, 72);
  justify-content: space-around;
  background:rgb(143, 182, 214);
}

.form label{
  font-weight: bold;
}

.form div {
  margin: 1.5%;
  display: flex;
  justify-content: space-between;
}

.form div input {
  width: 78%;
}

.form .register {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: calc(5px + 1vw);
}
</style>

 