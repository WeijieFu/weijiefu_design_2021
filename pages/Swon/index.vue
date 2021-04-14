<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <Title 
            date="2020"
            title="SWON" 
            :titleFont="10"
            tag="Redesign web for canadian architecture and planning firm"
            role="User Research,User Experience Design,User Interface Design"
        />
        <div class="enter"><a>Enter SWON &rarr;</a></div>
        <iframe src="https://swon.ca/" title="SWON" ></iframe>
         
        <Footer
            pName="APPITUR"
            pLink="https://weijiefu.design/appitur"
        />
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
        Title,
        Footer,
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
    transition: all 0.5s ease-out;
}
.enter a:hover {
    color: #999
}
</style>