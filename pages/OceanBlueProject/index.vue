<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <Title 
            date="2019" 
            title="Ocean Blue Project" 
            :titleFont="10"
            tag="Ocean Blue Project.inc is a grassroots environmental non profit. Their mission is to protect and conserve the world's ocean, beaches, and rivers, through education and awareness, by providing service learning projects, enhancing wildlife habitat, cleaning beaches and rivers, and by reducing pollution. This is an unsolicited project on Catchafire.org. The goal is to design a mobile app to improve how it delivers services and information to their beneficiaries, connects with supporters, or promotes events and programs."
            role="User Research,User Experience Design,User Interface Design, Interaction Design"
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