<template>
  <div class="contain">
    <div class="bar">
      <button @click.prevent="navAdmin('client')"> <i class="fi fi-rr-users-alt"></i></button>
      <button @click.prevent="navAdmin('appointment')"> <i class="fi fi-rr-calendar"></i> </button>
      <button @click.prevent="navAdmin('pendAppoint')"> <i class="fi fi-rr-calendar-clock"></i> </button>
      <button @click.prevent="navAdmin('notes')"> <i class="fi fi-rr-notebook"></i> </button>
      <button @click.prevent="navAdmin('noteClient')"> <i class="fi fi-rr-apps-add"></i> </button>
    </div>
    <div class="bodymenu">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    async navAdmin(page) {
      switch (page) {
        case 'client':
          //this.$router.push({ name: 'clients' })
          console.log('client');
          break;
        case 'appointment':
          console.log('appointment');
          break;
        case 'pendAppoint':
          console.log('pendAppoint');
          break;
        case 'notes':
          console.log('notes');
          break;
        case 'noteClient':
          console.log('noteClient');
          break;
        default:
          break;
      }
    }
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
  background-color: brown;

}

.bodymenu {
  width: 100%;
  height: 95%;
  background-image: url(../assets/justicia.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25%;

}

.bar button {
  width: 20%
}
</style>