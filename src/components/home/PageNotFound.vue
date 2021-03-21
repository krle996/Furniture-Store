<template>
    <div class="error">
        <b-img :src="image" alt="404" fluid></b-img>
        <h2>Stranica nije pronađena</h2>
    </div>
</template>

<script>
import Image from '../../assets/pictures/404/error404.png'
export default {
    data() {
        return {
            image: Image
        }
    },
}
</script>

<style scoped>
.error {
margin: 70px 0px 70px;
text-align: center;
}
</style>