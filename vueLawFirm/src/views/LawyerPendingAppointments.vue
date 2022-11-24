<template>
    <div class="contain">
        <div class="bar">
            <button @click.prevent="navAdmin('client')">
                <i class="fi fi-rr-users-alt"></i>
                <span>Clients</span>
            </button>
            <button @click.prevent="navAdmin('appointment')">
                <i class="fi fi-rr-calendar"></i>
                <span>Appointments</span>
            </button>
            <button class="foc" @click.prevent="navAdmin('pendAppoint')">
                <i class="fi fi-rr-calendar-clock"></i>
                <span>Pending</span>
            </button>
            <button @click.prevent="navAdmin('notes')">
                <i class="fi fi-rr-notebook"></i>
                <span>Notes</span>
            </button>
            <button @click.prevent="navAdmin('noteClient')">
                <i class="fi fi-rr-apps-add"></i>
                <span>Client Note</span>
            </button>
        </div>
        <div class="bodymenu">
            <div class="page">
                <div class="buscador">
                    <input type="text" v-model="dni" @keydown.prevent.enter="getOneClient">
                    <button @click.prevent="getOneClient">Search</button>
                </div>
                <div class="tarjeta">
                    <div v-for="(appo, idx) in appointments" :key="idx" class="card"
                        style="max-width: 18rem;">
                        <div class="card-header bg-transparent border-success">{{ appo.date }} {{ appo.hour }}</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">{{ appo.modality }}</h5>
                            <p class="card-text">{{ appo.ambit }}</p>
                            <p class="card-text">{{ appo.message }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../services/api'
export default {
    data() {

        return {
            dni: '',
            appointments: []

        }
    },
    methods: {
        async navAdmin(page) {
            switch (page) {
                case "client":
                    this.$router.push({ name: 'listclient' })
                    break;
                case "appointment":
                    this.$router.push({ name: 'listappointment' })
                    break;
                case "pendAppoint":
                    this.$router.push({ name: 'listpending' })
                    break;
                case "notes":
                    this.$router.push({ name: 'listnotes' })
                    break;
                case "noteClient":
                    this.$router.push({ name: 'listnoteclient' })
                    break;
                default:
                    break;
            }
        },
        async getOneClient() {
            let res = await API.getUsers()
            let res2 = res.data.filter((u) => u.role !== "admin").filter((e => e.dni === this.dni));
            this.appointments = await API.getAllPendingOneClient(res2[0]._id)
        }
    },

}
</script>

<style scoped>
.contain {
    height: 100%;
    width: 100%;
    margin: 0;
}

.bar {
    width: 100%;
    height: 6%;
    font-size: calc(17px + 1vh)
}

.bodymenu {
    width: 99%;
    height: 92%;
    background-image: url(../assets/justicia.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    display: flex;
    flex-wrap: wrap;
    margin: 1%;
}

.bar button {
    width: 20%;
    background-color: rgb(143, 182, 214);
    border: none;

}

.bar button:hover {
    background-color: rgb(86, 136, 178);
}

.bar span {
    margin-left: 4%;
    font-size: calc(5px + 1vw);
}

.page {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.buscador {
    width: 100%;
    display: flex;
    justify-content: center;
}

.tarjeta {
    width: 100%;
    height: 100%;
}

.card {
    max-width: 100% !important;
    margin: 1%;
    font-size: calc(9px + 1vw);
    border: 2px solid black !important;
    border-radius: 20px;
}

.card-header {
    background-color: rgb(86, 136, 178) !important;
    border-radius: 17px 17px 0px 0px;
    color: aliceblue;
}

.card-body {
    color: black !important;
}
</style>