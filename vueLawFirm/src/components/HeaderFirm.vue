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

.title1 {
  font-size: calc(20px + 1vh);

  font-style: normal;
  font-weight: bold;
  color: rgb(248, 247, 245);
  padding-left: 7px;

}

.btn-primary {
  height: calc(80% + 1vh) !important;
  text-align: center;
  background-color: rgb(15, 65, 112);
  color: lightcyan;
}

.testlog {
  color: lightcyan;

}

nav {
  margin-right: 1%;
}

.icon {
  height: 100%;
  width: calc(100px + 1vw);
  margin-left: 1%;
}
</style>