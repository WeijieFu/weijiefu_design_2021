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

         <ChapterLeft
            title=""
            text="Appitur's three mobile apps are losing users and generating less revenue, due to a myriad of reasons: "
        >
            <List
                :listItems="[
                `1. Confusing navigation : Navigating in the app is very confusing and important call to action buttons are often missing or ignored by the users.`,
                `2. User flow mismatching user needs : The existing app didn't take special needs from the target customers into consideration, therefore the function is less tailored or hard to use.`,
                `3. Outdated UI : The existing app needs a visual upgrade to create professional and trustworthy  impression.`,
                `4. Lack of engagement engine : Besides plain study and exam materials, the existing app doesn't offer much positive feedback to comply with user's learning curve.`
                ]"
            />
        </ChapterLeft>

        <ChapterRight
            index="02"
            title="Lean Cycle"
            text="By working closely with the shareholders and developer team, we implemented a Lean Cycle developing schedule, where the process is iterative and measurable."
        />

          <ImageMain
            :imageSrc="root+'appitur/02_lean_cycle.jpg'"
            imageAlt="banner"
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

    
}
</style>