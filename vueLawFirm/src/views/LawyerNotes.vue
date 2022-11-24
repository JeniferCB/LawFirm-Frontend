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
            <button @click.prevent="navAdmin('pendAppoint')">
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
            <div class="tarjeta">
                <div v-for="(note, idx) in notes" :key="idx" class="card" style="max-width: 18rem;">
                    <div class="card-header bg-transparent border-success">{{ note.day }}</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">{{ nameClient(note.client) }}</h5>
                        <p class="card-text">{{ note.text }}</p>
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
            notes: [],
            users: [],
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
        nameClient(id) {
            let res2 = this.users.filter((e => e._id === id));
            return res2[0].name + " " + res2[0].lastname
        }
    },
    async mounted() {
        const data = await API.getAllNotes();
        const res = await API.getUsers()
        this.notes = data;
        this.users = res.data
    }


}
</script>

<style scoped>
.contain {
    height: 100%;
    width: 100%;
    margin: 0;
    background: radial-gradient(ellipse,rgb(198, 212, 225) 0%,rgb(108, 144, 174) )
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
    overflow-y: scroll;
    justify-content: center;
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