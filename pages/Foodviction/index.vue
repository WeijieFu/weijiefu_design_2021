<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <Title 
            date="2019"
            title="FOOD VICTION" 
            :titleFont="10"
            tag="Foodviction is an online nutrition consultation agency, where customers browse different service packages, book online appointments and read nutritionist's health blog. Through site audit and competitor anlysis, we were able to identify the problems on the existing website--confusing onboarding experience and lack of coherent visual language. We worked closely with the client, helped them achieve better user experience and build visual identity system and eventually increase the conversion rate."
            role="User Research,User Experience Design,User Interface Design"
        />

        <ImageMain
            :imageSrc="root+'ocean_blue_project/05 banner.jpg'"
            imageAlt="banner"
        />




    </div>
</template>
<script>
import Mouse from '@/components/Mouse.vue';
import HomeButton from '@/components/Works/HomeButton.vue';
import Title from '@/components/Works/Title.vue';


export default {
    components:{
        Mouse,
        HomeButton,
        Title,

    }
}
</script>
<style scoped>
.container{

    background-color: #fff;
    width: 100vw;
    height: 300vh;
    
}
</style>