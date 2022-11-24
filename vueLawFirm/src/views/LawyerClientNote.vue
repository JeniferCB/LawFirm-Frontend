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
        <div class="formato">
            <div class="bodymenu">
                <div class="barsearch">
                    <input class="search" type="text" v-model="dni" @keydown.prevent.enter="getOneClient">
                    <button class="btn btn-primary sea" @click.prevent="getOneClient">Search</button>
                </div>
                <div v-for="(note, idx) in notes" :key="idx" class="card" style="max-width: 18rem;">
                    <div class="card-header bg-transparent border-success">{{ note.day }}</div>
                    <div class="card-body text-success">
                        <p class="card-text">{{ note.text }}</p>
                        <div class="conbuttom">
                            <a href="#" class="btn btn-danger" @click.prevent="delNote(note._id)">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container2">
                <textarea class="textoformat" rows="10" cols="50" v-model="newNote.text"> </textarea>
                <button class="btn btn-dark" @click.prevent="addNotes"> ADD NOTE </button>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../services/api'
export default {
    data() {
        return {
            dni: "",
            notes: [],
            newNote: {
                text: '',
                client: '',
            }
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
            this.notes = await API.getAllNotesOneClient(res2[0]._id)
            this.newNote.client = res2[0]._id
        },
        async delNote(id) {
            await API.deleteNotes(id);
            let res = await API.getUsers()
            let res2 = res.data.filter((u) => u.role !== "admin").filter((e => e.dni === this.dni));
            this.notes = await API.getAllNotesOneClient(res2[0]._id);
        },
        async addNotes() {
            await API.addNote(this.newNote)
            let res = await API.getUsers()
            let res2 = res.data.filter((u) => u.role !== "admin").filter((e => e.dni === this.dni));
            this.notes = await API.getAllNotesOneClient(res2[0]._id);
        }

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
  height: 7%;
  font-size: calc(17px + 1vh)
}

.bodymenu {
    overflow-y: scroll;
    width: 80%;
    height: 100%;
    background-image: url(../assets/justicia.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    display: flex;
    flex-wrap: wrap;
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

.btn {
    margin: 1%;
}
.conbuttom {
    display: flex;
    justify-content: end;
}

.barsearch {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 8%;
}

.formato {
    display: flex;
    height: 93%;
}

.container2 {
    width: 40%;
    height: 100%;
    background-color: rgb(51, 78, 103);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.textoformat {
    width: 98%;
    height: 80%;
    margin: 1%;
    margin-top: 5%;
    resize: none;
}
.card {
    max-width: 100% !important;
    margin: 1%;
    font-size: calc(9px + 1vw);
    border: 2px solid rgb(10, 42, 72) !important;
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

.sea{
    background-color: rgb(81, 133, 175);
    height: 80%;
}
.search{
    margin-top: 1%;
}
</style>