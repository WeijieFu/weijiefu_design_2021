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
            text=""
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
            :imageSrc="root+'foodviction/05_competitor.png'"
            imageAlt="competitor analysis"
        />

        <ChapterLeft
            title=""
            text="Key Findings"
        >
            <List
                :listItems="[
                `1. Length. The home pages of three competitors' websites are almost half of the length of our existing websites. The information is very compact and well proportioned. User can finish reading on 3-4 scrolls, and still have impression of all the content.`,
                '2. Graphics of healthy food. One image tells a thousand words. Using images of food as visual focus helps user to know immediately what the website is about.',
                '3. Image of Smile. The smiley face of the nutritionist can convey authenticity and build trust. The smile with a success story, can eliminate the suspicious and hesitant feeling of the user.',
                `4. Clear Information of Service Packages. Clear descriptions and instructions help user to navigate to the place they want, without causing the sense of lost. And it's the most read part in the whole onbarding experience.`,
                '5. Call to Action. Strategically laid out call to actions fit in the user flow and onboarding narrative and help customer conversion.'
                ]"
            
            />
        </ChapterLeft>

         <ChapterLeft
            title="User Persona"
            text="Based on data from Foodviction's clients database and our research on nutrition consultation industry, we are able to point out 3 main properties of target audience."
        />

        <div class="svgList">
            <div class="svgListItem">
                <img class="svg" src="@/assets/img/foodviction/06_userprofile_1.svg" alt="health issue">
                <div class="svg_title">Health Issue</div>
                <div class="svg_text">Our target clients are peole who are having problems with their health. They are looking for a natural and holistic way of improving their health problems and guidance to a healthier life style.</div>
            </div>
            <div class="svgListItem">
                <img class="svg" src="@/assets/img/foodviction/06_userprofile_2.svg" alt="health issue">
                <div class="svg_title">Ready to Change</div>
                <div class="svg_text">They have to be willing and ready to change! We educate, guide, and encourage our clients to a customized and realistic change to a better health.</div>
            </div>
            <div class="svgListItem">
                <img class="svg" src="@/assets/img/foodviction/06_userprofile_3.svg" alt="health issue">
                <div class="svg_title">Age Range</div>
                <div class="svg_text">The age ranges between mid-30s to 60s, especially 39-65 (typically are facing health problems like diabetes, hight blood pressure, high cholesterol, heart problems, stroke and medicine takers). Audience is men and women.</div>
            </div>
        </div>
       
        <ChapterRight
            index="03"
            title="A Better Onboarding"
            text="After identify onboarding experience as pain point, we decided to seperate user groups into 3 categories. The regular user who has already booked our service before and known very well about the content and the package to choose. The first-time user who lands on our website for the first time with a goal to find themselves a nutritionist and doesn't know what to expect. And the first-timers who are skeptical or comparing our service with other nutritionists at the same time.|Having these 3 categories in mind, the story telling of onboarding experience is extremely important. We have to come up with one narrative that responds to all the users' need and lead them smoothly to the information we want to present."
        />



        <ChapterLeft
            title="Regular User"
            text="Provide instant access to regular users who already know what they are doing with the website."
        />

        <img src="@/assets/img/foodviction/07_onboarding_1.svg" class="diagram" alt="regular user">


        <ChapterLeft
            title="First-time User"
            text="Quickiest way to let the user have a grasp of what this website is about and what services they can find."
        />

        <img src="@/assets/img/foodviction/07_onboarding_2.svg" class="diagram" alt="first-time user">

         <ChapterLeft
            title="Skeptical first-time User"
            text="Build trustworthiness with facts and testmonials for skeptical users."
        />

        <img src="@/assets/img/foodviction/07_onboarding_3.svg" class="diagram" alt="skeptical first-time User">

        <ChapterLeft
            title="Optimize site map"
            text="By optimizing the onboarding experience, we have seen the neccesity to simplify the whole site structure. We decided to reduce the layering of the existing structure and keep each page more accessible."
        />

        <img src="@/assets/img/foodviction/08_site_map.svg" class="diagram" alt="site map">



        <ChapterRight
            index="04"
            title="Wireframe"
            text="I sketched out several possible layouts according to the new site map. After the discussion with the client, we decided to create a minimalistic and functional wireframe."
        />

        <ImageMain
            :imageSrc="root+'foodviction/09_wireframe.png'"
            imageAlt="wireframe"
        />

        <ChapterRight
            index="05"
            title="Style Guide"
            text="A very obvious drawback of the existing webiste is the lack of coherent visual style."
        />

        <ChapterLeft
            title="Color Scheme"
            text="We created this new color scheme for Foodviction, based on the original orange-green combination. The original colors are very popping out, but difficult to utilize. It's hard to read with bright orange or green background and the colors are very distracting from the images and text content. So we decided to tune down the saturation and add 2 different grey color as secondary colors."
        />


        <img src="@/assets/img/foodviction/10_color_scheme.svg" class="diagram" alt="color scheme">

        <ChapterLeft
            title="Typography"
        />


        <img src="@/assets/img/foodviction/11_typography.svg" class="diagram" alt="typography">


        <ChapterRight
            index="05"
            title="Prototype"
            text="The biggest challenge of creating a visual style for Foodviction is to utlize color and typography to convey the spirit of Foodviction. After many discussions and revisions, we created this simple and dynamic look with sense of energy and youthfulness."
        />

        <ChapterLeft
            title="Onboarding"
        />

        
        <ImageMain
            :imageSrc="root+'foodviction/12_prototype_home.png'"
            imageAlt="prototype home page"
            :isFull="true"
        />
        
        <ChapterLeft
            title="Booking"
        />

        <ImageMain
            :imageSrc="root+'foodviction/13_prototype_booking.png'"
            imageAlt="prototype booking"
            :isFull="true"
        />

        <ImageMain
            :imageSrc="root+'foodviction/14_prototype_rest.png'"
            imageAlt="prototype"
        />



        <Footer
            pName="OCEAN BLUE PROJECT"
            pLink="https://weijiefu.design/oceanblueproject"
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
        background-color: #eee;
        width: 100vw;
    }
    .diagram{
        margin-top: 6rem;
        width: 84vw;
        margin-left: 8vw;
    }
    .diagram_small{
        width: 40vw;
        margin-left: 30vw;
    }


    .svgList{
        display: flex;
        margin-left: 10vw;
        margin-right: 10vw;
        justify-content: space-between;
        font-family: 'Exo 2', sans-serif;

    }
    .svgListItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 18rem;

        text-align: center;
        margin-top: 3rem;
    }
    .svg{
        width: 10rem;
    }
    .svg_title{
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: 600;

    }
    .svg_text{
        font-size: 0.8rem;
        color: #cecece;
    }



    @media only screen and (max-width: 600px) {
        .svgList{
            flex-direction: column;
            width: 80vw;
            margin-left: 10vw;
            margin-right: 10vw;
            align-items: center;
        }
    }
</style>