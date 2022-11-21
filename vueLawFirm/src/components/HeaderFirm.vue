<script setup>
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
</script>

<template>
    <div class="navigation">
        <h3 class="title1">LawFirm</h3>
        <nav v-if="!token">
            <RouterLink class="btn btn-primary" to="/login">Login</RouterLink> |
            <RouterLink class="btn btn-primary" to="/signup">Signup</RouterLink>
        </nav>
        <nav v-else>
            Welcome {{ email }} -
            <button @click="logout">Logout</button>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: '',
            email: ''
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.token = ''
            localStorage.removeItem('email')
            this.$router.push({ name: 'login' })
        }
    },
    created() {
        this.token = localStorage.getItem('token')
        this.email = localStorage.getItem('email')
    }
}
</script>

<style scoped>
.navigation {
    display: flex;
    width: 100%;
    height: 7%;
    background-color:rgb(10, 42, 72);
    justify-content: space-between;
    align-items: center;
}

.title1 {
    font-size: 20px;

    font-style: normal;
    font-weight: bold;
    color: rgb(248, 247, 245);
    padding-left: 7px;

}

.btn-primary {
    height: 100% !important;
    text-align: center;
    background-color:rgb(15, 65, 112) ;
    
    color: lightcyan;
}
</style>