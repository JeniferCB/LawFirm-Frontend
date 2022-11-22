<template>
    <div class="format">
        <div class="container1">
            <div v-for="(appo, idx) in appointments" :key="idx" class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ appo.date }} {{ appo.hour }}</h5>
                    <h5>{{ appo.modality }}</h5>
                    <p class="card-text">{{ appo.message }}</p>
                    <a href="#" class="btn btn-danger">Cancel</a>
                </div>
            </div>
        </div>
        <div class="container2">
            <label> DATE </label>
            <input type="date">
            <label> HOUR </label>
            <input type="time" name="time" min="09:00" max="17:00">
            <label> MODALITY </label>
            <div class="modality">
                <div>
                    <input name="modality" type="radio">
                    <label> Call</label>
                </div>
                <div>
                    <input name="modality" type="radio">
                    <label>presencial</label>
                </div>
            </div>
            <label> AMBIT </label>
            <select name="select">
                <option selected hidden disabled> Select ambit</option>
                <option value="Laboral">Laboral</option>
                <option value="Penal">Penal</option>
                <option value="Civil">Civil</option>
                <option value="Administrativo">Administrativo</option>
                <option value="Fiscal">Fiscal</option>
                <option value="Procesal">Procesal</option>
                <option value="Otros">Otros</option>
            </select>
            {{user}}
            <label> MESSAGE </label>
            <textarea rows="10" cols="50"> </textarea>
            <button class="btn btn-dark" @click.prevent="addAppointment()"> ADD APPOINTMENT</button>
        </div>
    </div>

</template>

<script>
import API from '../services/api.js';

export default {
    data() {
        return {
            appointments: [],
            list: {
                date: '',
                hour: '',
                modality: '',
                ambit: '',
                client: '',
                lawyer: '',
                message: '',
                done: false
            },
            user: ""
        }
    },
    mounted() {
        API.getAllPendingAppointments()
            .then(res => {
                this.appointments = res.data
            })
    },
    beforeMount() {
        API.getUsers()
            .then(res => {
                this.client = localStorage.getItem('id')
                res.data.forEach(e => {
                   if (e.role !== 'user') {
                    this.user = e.id
                   }
                });
            })
    }
}
</script>

<style scoped>
.format {
    font-size: calc(5px + 1vw);
    height: 100%;
    width: 100%;
}

.format label {
    font-weight: bold;
}

.modality label {
    font-weight: normal;
}

.container1 {
    overflow-y: scroll;
    height: 100%;
    width: 70%;
    border: 2px solid black;
}

.container2 {
    color: aliceblue;
    background-color: rgb(23, 92, 156);
    height: 100%;
    width: 30%;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

textarea {
    height: 30%;
    width: 100%;
    resize: none;
}

.card {
    border: 2px solid black;
    width: 98% !important;
    margin: 1%;
}

.btn-dark {
    width: 100%;
    font-size: calc(5px + 1vw);

}
</style>