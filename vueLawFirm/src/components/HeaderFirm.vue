<template>
  <div class="navigation">
    <img class="icon" src="../assets/iconjusticiablanco.png">
    <nav v-if="!store.isLoggedIn">
      <RouterLink class="btn btn-primary" to="login">Login</RouterLink>
      <span class="testlog"> | </span>
      <RouterLink class="btn btn-primary" to="signup">Signup</RouterLink>
    </nav>
    <nav v-else>
      <span class="testlog">Welcome {{ store.userEmail }} - </span>
      <RouterLink to="home" class="btn btn-primary" @click="logout">Logout</RouterLink>
    </nav>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      store: useAuthStore()
    }
  },
  methods: {
    logout() {
      this.store.logout()
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style scoped>
.navigation {
  display: flex;
  width: 100%;
  height: calc(7% + 1vw);
  background-color: rgb(10, 42, 72);
  justify-content: space-between;
  align-items: center;
}



.btn-primary {
  height: calc(80% + 1vh) !important;
  text-align: center;
  background-color: rgb(12, 52, 90);
  color: lightcyan;
  border-color:lightcyan ;
  font-size: calc(11px + 1vh)
}

.testlog {
  color: lightcyan;
  font-size: calc(11px + 1vh)
}

nav {
  margin-right: 1%;
}

.icon {
  height: 100%;
  width: 13%;
  margin-left: 1%;
}

@media (max-width: 500px){
  .icon{
    width: 100px;
  }
}

</style>