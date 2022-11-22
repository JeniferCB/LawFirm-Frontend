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
            }
        }
    },
    methods: {
        async signupUser() {
            const response = await API.signup(this.newUser)
            console.log(response);
            if (response.error) {
                alert('Error creating account')
            }else{
                this.emitter.emit("login")
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
}
.form {
    display: flex;
    flex-direction: column;
    height: calc(90% + 1vh);
    width: calc(60% + 1vw);
    border: 3px solid black;
    justify-content: space-around;
}
.form div{
    margin: 1.5%;
    display: flex;
    justify-content: space-between;
}
.form div input{
    width: 78%;
}
.form .register{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: calc( 5px + 1vw);
}
</style>

 