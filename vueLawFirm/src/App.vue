<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderFirm from './components/HeaderFirm.vue';
import FooterFirm from './components/FooterFirm.vue';
</script>

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

<template>
    <div class="app">
        <HeaderFirm />
        <div class="body">
            <RouterView />
        </div>
        
        <FooterFirm/>
    </div>
</template>

<style scoped>
.app {
    height: 95vh ;
}
.body  {
    background-color: black;
    overflow-y: scroll;
    height: 92%;
}
</style>
