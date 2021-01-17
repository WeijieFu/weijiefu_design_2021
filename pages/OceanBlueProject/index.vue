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
            text=""
        >
            <Icons>
                <Icon
                    :iconSrc="root+'icon/layers-24px.svg'"
                    iconAlt="information architecture"
                    iconText="Info Structure"
                />
                <Icon
                    :iconSrc="root+'icon/timeline-24px.svg'"
                    iconAlt="user flow"
                    iconText="User Flow"
                />
            </Icons>
        </ChapterRight>

        <ChapterLeft
            title="Information Structure"
            text="The main framework of this application contains 5 parts, which will share an intersection module with each other, namely the CleanUp session. A CleanUp session can be shared in the social feeds, and the status of a current CleanUp can be managed in the message and profile section. The structure of the app enables a fluent flow for user to share, join, organize CleanUps."
        />

        <img src="@/assets/img/ocean_blue_project/02 information_architecture.svg" class="diagram" alt="information structure">


        <ChapterLeft

            title="User Flow"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid eveniet saepe, quam fuga, reprehenderit harum itaque laborum voluptatem ab consectetur. "
        />

        <img src="@/assets/img/ocean_blue_project/02 information_architecture.svg" class="diagram" alt="information structure">



        <ChapterRight
            index="03"
            title="Wireframe"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid eveniet saepe, quam fuga, reprehenderit harum itaque laborum voluptatem ab consectetur. Fugit rem, aspernatur, veniam vero atque minima repudiandae possimus architecto itaque modi, nesciunt eum repellendus quam a doloribus totam facilis. Fugiat architecto quas optio dicta provident in unde eos?"
        >  
        </ChapterRight>

          <ImageMain
            :imageSrc="root+'ocean_blue_project/03 wireframe.svg'"
            imageAlt="wireframe"
            :isFull="true"
        />

        <ChapterRight
            index="04"
            title="Prototype"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid eveniet saepe, quam fuga, reprehenderit harum itaque laborum voluptatem ab consectetur. Fugit rem, aspernatur, veniam vero atque minima repudiandae possimus architecto itaque modi, nesciunt eum repellendus quam a doloribus totam facilis. Fugiat architecto quas optio dicta provident in unde eos?"
        >
        </ChapterRight>

        <VideoMain
            backgroundColor="#3CCAFF"
            textColor="#fff"
            :videoSrc="root+'ocean_blue_project/01 tabs.mp4'"
            videoTitle="Navigate using five tabs"
            videoDescription="User can navigate through 5 seperate tabs. Daily tab gives user information about daily updates of the current marine pollution situation and featured articles. Social tab let user interact with others and share stories as well as recent cleanups. Map tab is the main portal to CleanUp sessions. Message tab shows the status of CleanUps and coversations among individules or groups. Profile tab stores all the information about the user, such as upcoming events, previous posts and app settings."
        />

        <VideoMain
            :isReversed="true"
            backgroundColor="#3CCAFF"
            textColor="#fff"
            :videoSrc="root+'ocean_blue_project/02 map.mp4'"
            videoTitle="Browse CleanUp in the map"
            videoDescription="Map is the main place where user can find CleanUps near their location. CleanUps are divided into 3 types: to be started, to be approved, recruiting. User can also report a beach by uploading photos, and the beach will be shown on the map as to be started."
        />

         <VideoMain
            backgroundColor="#3CCAFF"
            textColor="#fff"
            :videoSrc="root+'ocean_blue_project/04 start cleanup.mp4'"
            videoTitle="Start a CleanUp in the map"
            videoDescription="By selecting a to be started location, user can start a CleanUp. User will be led into the process for starting a CleanUp, such as filling up the organizer information, setting up requirement for participants and equipments and signing up agreements. The CleanUp will be shown as to be approved on the map, and the status will be shown in Message tab, user can track the progress of approvement."
        />

        <VideoMain
            :isReversed="true"
            backgroundColor="#3CCAFF"
            textColor="#fff"
            :videoSrc="root+'ocean_blue_project/03 cleanup.mp4'"
            videoTitle="Organize your CleanUp"
            videoDescription="User can access Dashboard in Message or Profile tab to view and manage the CleanUp team. The organizer will have the authority to assign different roles to team membersand divide CleanUp territories. Each territory consists of four functional roles, a team leader, reporter, security and supply manageer. Reporters are responsible for taking pictures and writing description of the debris, then the report will be sent to the databank of Ocean Blue Project."
        />
        
        <Footer
            pName="SWON"
            pLink="https://weijiefu.design/swon"
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
    .diagram{
        margin-top: 6rem;
        width: 75vw;
        margin-left: 12.5vw;
    }
</style>