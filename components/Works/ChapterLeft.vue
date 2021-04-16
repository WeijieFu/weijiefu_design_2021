<template>
    <div class="container">

        <div class="title">{{title}}</div>
        <div class="text">{{text}}</div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        
        title: String,
        text: String,
    }
}
</script>
<style scoped>
    .container{
        margin-top: 5rem;
        font-family: 'Exo 2', sans-serif;
        margin-left: 10vw;
        line-height: 1.5;
    }
    .index{
        font-size: 0.8rem;
    }
    .title{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .text{
        width: 40vw;
    }

    @media only screen and (max-width: 600px) {
        .text{
            width: 80vw;
            font-size: 0.8rem;
        }
        .container{
            margin-left: 2rem;
            width: calc(100vw - 2rem) !important;
        }
    }
</style>