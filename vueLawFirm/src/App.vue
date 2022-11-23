<template>
  <div class="app">
    <HeaderFirm />

    <div class="body">
      <RouterView />
    </div>

    <FooterFirm />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import HeaderFirm from './components/HeaderFirm.vue';
import FooterFirm from './components/FooterFirm.vue';
export default {
  components: {
    HeaderFirm,
    FooterFirm
  }
}
</script>

<style scoped>
.app {
  height: 95vh;
  font-size: calc(10px + 1vw);
}

.body {
  overflow-y: scroll;
  height: 92%;
}
</style>
