<script setup>
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
</script>

<template>
    <div class="navigation">
        <h3 class="title1">LawFirm</h3>
        <nav v-if="!token">
            <RouterLink class="btn btn-primary" to="login">Login</RouterLink> 
            <span class="testlog"> | </span> 
            <RouterLink class="btn btn-primary" to="signup">Signup</RouterLink>
        </nav>
        <nav v-else>
            <span class="testlog">Welcome {{ email }} - </span> 
            <RouterLink to="home" class="btn btn-primary" @click="logout">Logout</RouterLink>
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
            localStorage.removeItem('rol')
            localStorage.removeItem('id')
            this.$router.push({ name: 'home' })
        },
    },
    created() {
        // this.token = localStorage.getItem('token')
        // this.email = localStorage.getItem('email')
        this.emitter.on("login",() => {
            this.token = localStorage.getItem('token')
            this.email = localStorage.getItem('email')
        })
    }
}
</script>

<style scoped>
.navigation {
    display: flex;
    width: 100%;
    height: calc(7% + 1vw);
    background-color:rgb(10, 42, 72);
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
    background-color:rgb(15, 65, 112) ;
    color: lightcyan;
}
.testlog{
    color:lightcyan;

}
nav {
    margin-right: 1%;
}
</style>