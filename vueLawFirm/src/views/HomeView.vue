<template>
    <div class="con">
        <img class="fondo" src="../assets/fondohome.png">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fondo {
    height: 100%;
    width: 100%;
}

.con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    /*background:rgb(114, 159, 196);*/
    background: linear-gradient(90deg, rgba(114, 159, 196) 0%, rgb(30, 59, 84));
}
</style>