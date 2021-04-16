<template>
    <div class="footer-container">
        <div class="next">next project</div>
        <div class="text" @click="onClick">{{pName}}</div>
    </div>
</template>
<script>
import Project from '@/components/Home/Project.vue';
export default {
    props:{
        pName: String,
        pLink: String,
    },
    components:{
        Project,
    },
    methods:{
        onClick(){
            window.open(this.pLink, "_blank");
        }
    }
}
</script>
<style scoped>
    .footer-container{
        height: 100vh;
        /* background-color: #000; */
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .text{
        font-family: 'Exo 2', sans-serif;
        font-size: 10rem;
        color: #cecece;
        transition: all 0.5s ease-in;
    }
    .text:hover {
        color: #000;
    }

    @media only screen and (max-width: 600px) {
        .footer-container{
            height:100vh;
            margin-top:0;
        }
        .text{
            font-size: 4rem;
        }
    }
</style>