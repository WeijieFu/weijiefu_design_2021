<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <!-- <iframe src="https://swon.ca/" title="SWON" ></iframe> -->
        <div class="enter"><a href="https://weijiefu.design" target="_blank">COMING SOON &rarr;</a></div>
     
         
    
    </div>
</template>
<script>
import Mouse from '@/components/Mouse.vue';
import HomeButton from '@/components/Works/HomeButton.vue';
import Title from '@/components/Works/Title.vue';
import Footer from '@/components/Works/Footer.vue';


export default {
    components:{
        Mouse,
        HomeButton,
     
    }
}
</script>
<style scoped>
.container{

    background-color: #fff;
    width: 100vw;


    
}
iframe {
    margin-top: 5rem;
    width: 80vw;
    height: 45vw;
    margin-left: 10vw;
    border: none;
    pointer-events: none;
}
.enter{
    font-family: 'Exo 2', sans-serif;
    margin-top: 5rem;
    margin-left: 50vw;
}
.enter a{
    transition: all 0.25s ease-out;
    text-decoration: none;
    color: #000;
}
.enter a:hover {
    color: #999
}
</style>