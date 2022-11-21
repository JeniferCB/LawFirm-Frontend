<template>
    <div class="format">
        <div class="login">
            <div >
                 EMAIL
                <input class="email" type="email" v-model="newUser.email" />
            </div>
            <div >
                 PASSWORD
                <input class="pass" type="password" @keydown.prevent.enter="loginUser()" v-model="newUser.password" />
            </div>
            <button @click.prevent="loginUser()">LOGIN</button>
        </div>
    </div>


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
            this.$emit('token')
            if (response.error) {
                alert('wrong username/password')
            }
        }
    }
};
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
    height: 30%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.email {
    margin-left: 10%;
    width: 70%;
}
.pass {
    margin-left: 3%;
    width: 50%;
}                 
</style>
  