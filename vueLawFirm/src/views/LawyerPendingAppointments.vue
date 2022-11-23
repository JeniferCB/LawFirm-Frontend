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
            <button @click.prevent="navAdmin('Clientnote')">
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
                    <div class="card" v-for="(appo, idx) in appointments" :key="idx">
                        <div class="card-body">
                            <h5 class="card-title">{{ appo.date }} {{ appo.hour }}</h5>
                            <p>{{ appo.modality }}</p>
                            <p>{{ appo.ambit }}</p>
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
    height: 5%;
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
    background-color: rgb(74, 156, 156);
    border: none;
}

.bar button:hover {
    background-color: rgb(54, 109, 109);
}

.foc:target {
    background-color: rgb(54, 109, 109);
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
    margin: 1%;
    border: 2px solid black;
    border-radius: 15px;
}

.card p {
    background-color: rgb(206, 202, 202);
}
</style>