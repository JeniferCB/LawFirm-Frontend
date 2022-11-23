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
            <button @click.prevent="navAdmin('Clientnote')">
                <i class="fi fi-rr-apps-add"></i>
                <span>Client Note</span>
            </button>
        </div>
        <div class="bodymenu">
            <div class="tarjeta">
                <div class="card" v-for="(note, idx) in notes" :key="idx">
                    <div class="card-body">
                        <h5 class="card-title">{{ note.day }}</h5>
                        <p class="card-text">{{ note.text }}</p>
                        <h5>{{nameClient(note.client)}}</h5>
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
                    console.log("noteClient");
                    break;
                default:
                    break;
            }
        },
        nameClient(id) { 
            let res2 =  this.users.filter((e => e._id === id));
            return res2[0].name + " " + res2[0].lastname
        }
    },
    async mounted() {
        const data = await API.getAllNotes();
        const res = await API.getUsers()
        this.notes = data;
        this.users = res.data
        console.log(this.users);
    }


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

.bar span {
    margin-left: 4%;
    font-size: calc(5px + 1vw);
}
</style>