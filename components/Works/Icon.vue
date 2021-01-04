<template>
    <div class="icon-container">
        <img class="icon" :src="iconSrc" :alt="iconAlt">
        <div class="text">{{iconText}}</div>
    </div>
</template>
<script>
export default {
    props:{
        iconSrc : String,
        iconAlt : String,
        iconText: String,
    }
}
</script>
<style scoped>
.icon-container{
    margin-right: 5rem;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.icon{
    width: 36px;
    height: 36px;
}
.text{
    color: #cecece;
}
</style>