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
            :imageSrc="root+'foodviction/01_cover.png'"
            imageAlt="banner"
        />

        <ChapterRight
            index="01"
            title="Problem Space"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur neque, laudantium, porro odit corrupti minima nisi suscipit hic commodi deleniti. Sit vero accusamus expedita illum animi? Sit adipisci aliquid, eos, reiciendis molestias repudiandae doloribus saepe, alias veritatis non est. Molestiae iusto dolore aliquam veniam suscipit commodi ab, doloribus earum!"
        />

         <ChapterRight
            index="02"
            title="Research"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur neque, laudantium, porro odit corrupti minima nisi suscipit hic commodi deleniti. Sit vero accusamus expedita illum animi? Sit adipisci aliquid, eos, reiciendis molestias repudiandae doloribus saepe, alias veritatis non est. Molestiae iusto dolore aliquam veniam suscipit commodi ab, doloribus earum!"
        >
            <Icons>
                <Icon
                    :iconSrc="root+'icon/question_answer-24px.svg'"
                    iconAlt="stakeholder interview"
                    iconText="Stakeholder Interview"
                />
                <Icon
                    :iconSrc="root+'icon/edit_attributes-24px.svg'"
                    iconAlt="brand attributes"
                    iconText="Brand Attributes"
                />
            </Icons>
            <Icons>
                <Icon
                    :iconSrc="root+'icon/compare_arrows-24px.svg'"
                    iconAlt="competitor analysis"
                    iconText="Competitor Analysis"
                />
                <Icon
                    :iconSrc="root+'icon/accessibility_new-24px.svg'"
                    iconAlt="user persona"
                    iconText="User Persona"
                />
            </Icons>
         </ChapterRight>
    


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

    }
}
</script>
<style scoped>
.container{

    background-color: #fff;
    width: 100vw;

    
}
</style>