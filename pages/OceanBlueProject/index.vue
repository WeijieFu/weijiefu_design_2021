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
        <ImageMain
            :imageSrc="root+'ocean_blue_project/05 banner.jpg'"
            imageAlt="banner"
        />
       
       
        <ChapterRight
            index="01"
            title="Problem Space"
            text="Ocean Blue Porject was founded in 2012 in Newport, Oregon. The members and volunteers clean up beaches and river banks while restoring by planting native vegetation. Since then, Ocean Blue Project has removed 173,302 pounds of debris from beaches and waterways. Most noteworthy, 82,582 pounds was removed in 2019 alone. 5,800 students and volunteers are involved each year. The growing community needs a online portal for educaton, communication, events organization and dataset documentation."
        />
      
        <img src="@/assets/img/ocean_blue_project/01 problem.svg" class="diagram" alt="">

        <!-- <ImageMain
            :imageSrc="root+'ocean_blue_project/01 problem.svg'"
            imageAlt="banner"
        /> -->

        
        <ChapterRight
            index="02"
            title="Research"
            text="Ocean Blue Porject was founded in 2012 in Newport, Oregon. The members and volunteers clean up beaches and river banks while restoring by planting native vegetation. Since then, Ocean Blue Project has removed 173,302 pounds of debris from beaches and waterways. Most noteworthy, 82,582 pounds was removed in 2019 alone. 5,800 students and volunteers are involved each year. The growing community needs a online portal for educaton, communication, events organization and dataset documentation."
        >
            <Icons>
                <Icon
                    iconAlt="information architecture"
                    iconText="Information Architecture"
                />
                <Icon
                    iconAlt="information architecture"
                    iconText="Information Architecture"
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
import Icon from '@/components/Works/Icon.vue';
import Icons from '@/components/Works/Icons.vue';


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
        Icon,
        Icons,
    }
}
</script>
<style scoped>
    .container{
        background-color: #fff;
        width: 100vw;
    }
    .diagram{
        margin-top: 6rem;
        width: 60vw;
        margin-left: 20vw;
    }
</style>