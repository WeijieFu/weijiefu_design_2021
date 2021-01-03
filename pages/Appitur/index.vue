<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <Title 
            date="2020"
            title="APPITUR" 
            :titleFont="10"
            tag="Redesign mobile education and assessment platform for Appitur, to increase user engagement and help our client increase profitability."
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

    background-color: #fff;
    width: 100vw;
    height: 300vh;
    
}
</style>