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

        


        <ChapterLeft
            title="Site Audit"
            text="Before we started our ideation session, we conducted site audit on client's exsiting website. It is a very amateurishly built website with elementor and wordpress. But there are some points we appreciate, such as the orange/green color palette and the representation of healthy food. "
        />  


        <ImageMain
            :imageSrc="root+'foodviction/02_site_audit.jpg'"
            imageAlt="site audit"
        />

         <ChapterLeft
            title="Current User Flow"
            text="The exisiting information architecture was very chaotic. A very import product list was burried deep in the sub-link, and the categories didn't do the job to differentiate each service package. There were quetionaire and agreement pages not fit into the user flow. And the arrangement of call to actions makes user lost before they sign up a session. We decided to help the owner of Foodviction to work on a better version of service packages as well as onboarding experience. "
        />  


        <img src="@/assets/img/foodviction/03_current_site_map.svg" class="diagram" alt="current site map">

         <ChapterRight
            index="02"
            title="Research"
            text=""
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
    
        <ChapterLeft
            title="Stakeholder Interview"
            text="Key Focus Area"
        >
            <List
            :listItems="[
            '1. How would you measure success for this project?',
            '2. What are you trying to communicate?',
            '3. What are your challenges?',
            '4. What have you done so far? What has worked? What hasn’t?',
            '5. What should your customer accomplish with your website?'
            ]"
            
            
            />
        </ChapterLeft>

         <ChapterLeft
            title="Brand Attributes"
            text="Brand Attributes are the core values that define the overall nature of the company and represent the essence of the brand, it helps to portray the brand characteristics of the company and helps in formulating the brand identity. After long discussion with the owner of Foodviction, we have concluded 3 top brand attributes representing Foodviction."
        />
           
         <img src="@/assets/img/foodviction/04_brand_attributes.svg" class="diagram diagram_small" alt="brand attributes">


        <ChapterLeft
            title="Competitor Analysis"
            text="Together with the client, we looked into our competitors' strength and weakness strategically to see what helps to build brand identity in this industry and unsuccessful features to avoid. We picked 3 US-based nutritionists and their business websites."
        />

         <ImageMain
            :imageSrc="root+'foodviction/02_site_audit.jpg'"
            imageAlt="site audit"
        />

        <Footer
            pName="SWON"
            pLink="https://swon.ca/"
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
import List from '@/components/Works/List.vue';


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
    .diagram{
        margin-top: 6rem;
        width: 75vw;
        margin-left: 12.5vw;
    }
    .diagram_small{
        width: 40vw;
        margin-left: 30vw;
    }
</style>