<template>
    <div class="container">
        <img class="image" :src="imageSrc" alt="imageAlt">
    </div>
</template>
<script>
export default {
    props:{
        imageSrc: String,
        imageAlt: String,
    }
}
</script>
<style scoped>
    .container{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .image{
        width: 80vw;
        margin-top: 8rem;
    }
</style>