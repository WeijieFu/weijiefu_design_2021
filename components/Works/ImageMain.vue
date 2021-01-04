<template>
    <div class="container">
        <img class="image" :src="imageSrc" alt="imageAlt" :class="{image_full : isFull}">
    </div>
</template>
<script>
export default {
    props:{
        imageSrc: String,
        imageAlt: String,
        isFull: Boolean,
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
        margin-top: 5rem;
    }
    .image_full{
        width: 100vw;
    }
</style>