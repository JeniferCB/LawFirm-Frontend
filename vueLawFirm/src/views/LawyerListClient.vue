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
      <div v-for="(cli, idx) in clients" :key="idx" class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">{{ cli.name }} {{ cli.lastname }}</div>
        <div class="card-body text-success">
          <h5 class="card-title">{{ cli.dni }}</h5>
          <p class="card-text">{{ cli.email }}</p>
          <p class="card-text">{{ cli.phone }}</p>
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
      clients: []
    };
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
  },
  async mounted() {
    const data = await API.getAllClients();
    this.clients = data;
  }
};
</script>

<style scoped>
.contain {
  height: 100%;
  width: 100%;
  margin: 0;
  /*background: linear-gradient(90deg, rgba(114, 159, 196) 0%, rgb(30, 59, 84));*/
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
  height: calc(35% + 1vh);
  margin: 1%;
  font-size: calc(5px + 1vw);
 
}
</style>
