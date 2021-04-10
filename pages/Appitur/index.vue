<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <Title 
            date="2020"
            title="APPITUR" 
            :titleFont="10"
            tag="Appitur is a white-label mobile education and assessment platform, allows other premier educators to connect consumers with their learning resources and create insights for both learners and trainers. We helped Appitur rethink the users' needs to increase user engagement and conversion, eventually to increase profitability."
            role="User Research, User Interview, Journey Mapping, Wireframing, Visual Design, Interaction Design"
        />

        <ImageMain
            :imageSrc="root+'appitur/01_header.png'"
            imageAlt="banner"
        />

        <ChapterRight
            index="01"
            title="Problem Space"
            text=""
        />


    </div>
</template>
<script>
import Mouse from '@/components/Mouse.vue';
import HomeButton from '@/components/Works/HomeButton.vue';
import Title from '@/components/Works/Title.vue';
import ImageMain from '@/components/Works/ImageMain.vue';
import ChapterRight from '@/components/Works/ChapterRight.vue';
import ChapterLeft from '@/components/Works/ChapterLeft.vue';
import Icon from '@/components/Works/Icon.vue';
import Icons from '@/components/Works/Icons.vue';
import VideoMain from '@/components/Works/VideoMain.vue';
import Footer from '@/components/Works/Footer.vue';

export default {
    data(){
        return{
            root: "https://cdn.jsdelivr.net/gh/WeijieFu/weijiefu_design_2021/assets/img/"
        }
    },
    components:{
        Mouse,
        HomeButton,
        Title,
        ImageMain,
        ChapterRight,
        ChapterLeft,
        Icon,
        Icons,
        VideoMain,
        Footer,


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