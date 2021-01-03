<template>
    <div class="container">
        <div class="index">{{index}}</div>
        <div class="title">{{title}}</div>
        <div class="text">{{text}}</div>
    </div>
</template>
<script>
export default {
    props:{
        index: String,
        title: String,
        text: String,
    }
}
</script>
<style scoped>
    .container{
        margin-top: 5rem;
        font-family: 'Exo 2', sans-serif;
        margin-left: 50vw;
        line-height: 1.5;
    }
    .index{
        font-size: 0.8rem;
    }
    .title{
        font-size: 3rem;
        margin-bottom: 4rem;
        font-weight: 600;
    }
    .text{
        width: 40vw;

    }
</style>