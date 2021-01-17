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

    background-color: #eee;
    width: 100vw;
    height: 300vh;
    
}
</style>