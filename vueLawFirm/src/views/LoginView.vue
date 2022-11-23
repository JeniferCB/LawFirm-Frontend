<template>
  <div class="format">
    <div class="login">
      <div>
        <label>EMAIL</label>
        <input class="email" type="email" v-model="newUser.email" />
      </div>
      <div>
        <label>PASSWORD</label>
        <input class="pass" type="password" @keydown.prevent.enter="loginUser()" v-model="newUser.password" />
      </div>

      <div class="button">
        <button class="btn btn-dark" @click.prevent="loginUser()">LOGIN</button>
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
        email: '',
        password: '',
        role: ''
      },
      store: useAuthStore()
    }
  },
  methods: {
    async loginUser() {
      const response = await API.login(this.newUser)
      if (response.error) {
        alert('wrong username/password')
      } else {
        this.store.login(response.token, response.email, response.rol, response.id)

        if (this.store.isAdmin) {
          this.$router.push({ name: 'listclient' })
        } else {
          this.$router.push('appointments')
        }
      }
    }
  }
}
</script>
  
<style scoped>
.format {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  border: 3px solid black;
  height: calc(40% + 1vh);
  width: calc(60% + 1vw);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

label {
  margin-left: 1.5%;
}

.email {
  margin-left: 10%;
  width: 70%;
}

.pass {
  margin-left: 2.5%;
  width: 50%;
}

.btn-dark {
  width: calc(20% + 1vw);
  font-size: calc(5px + 1vw);

}

.button {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
  