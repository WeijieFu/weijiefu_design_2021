<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <Title
            date="2020"
            title="Pride 2020"
            :titleFont="10"
            tag="Under the influence of Covid-19, Pride has been canceled in many places. As the biggest event promoting self-affirmation, dignity and equality, Pride has brought not only LGBTQIA folks together, but also left significant positive impact on the whole society. It's a pity that we have to stay home during this celebration, but with the power of Augmented Reality Technology, we can still share the stories to remind each other of the solidarity of our community and the importance of being your true self."
            role="User Research, Augmented Reality, Prototype"
        />

        <ImageMain
            :imageSrc="root+'pride_2020/00 title.jpg'"
            imageAlt="banner"
        />

        <ChapterRight
            index="01"
            title="Goal"
            text=""
        />

        <ChapterLeft
            title=""
            text=""
        >
            <List
                :listItems="[
                `1. Build a platform to enable social activities during
               the pandemic.`,
                `2. Connect the virtual world and the real world.`,
                `3. Redefine the relationship between home and city.`,

                ]"
            />
        </ChapterLeft>

        <ChapterRight
            index="02"
            title="Why Web AR?"
            text="Web AR is to develop Augmented Reality on the Web. For developer it's a solution to build cross-platform applications. Web AR runs on any modern smartphone with a web browser. And it saves all the efforts and costs to publish applications on App stores. For user, it means easy access to the AR experience by just clicking the link or scanning a QR code."
        />

        <ImageMain
            :imageSrc="root+'pride_2020/intro-image.gif'"
            imageAlt="banner"
        />

        <ChapterLeft
            title=""
            text=""
        >
            <List
                :listItems="[
                `source: https://ar-js-org.github.io/AR.js-Docs/`,


                ]"
            />
        </ChapterLeft>


        <ChapterRight
            index="03"
            title="Background Research"
            text=""
        >

        </ChapterRight>


        <ChapterLeft
            title="Pride and City"
            text=" The Pride Parade is the peak moment of all pride events. It draws hundreds of millions of people every year to gather together in the city. There are 3 key elements are essential to the definition of Pride Parade."
        >
            <List
                :listItems="[
                `1. The March, consists of LGBTQIA folks and allies, equal right activists, supporters, and performers who are not afraid of sharing their stories. Pride is a political stage and also a stage to send message to the people who are still suffering from being different`,
                `2. The Paticipants. I have been a paticipant of pride parade several times. Even just standing in the crowd, watching the marching float and performers, I can feel the energy and empowerment. The sense of presence is the way how people communicate and connect.`,
                `3. The City. The urban life which used to be so easily forgot before the pandemic, now is very much missed and appreciated. The city, streets and squares, malls and restaurants, museums and parks, are the containers of life. And it shapes who we are and how we interact in a very subtle yet profound way.`,

                ]"
            />
        </ChapterLeft>

        <ImageMain
            :imageSrc="root+'pride_2020/01 pride and city.svg'"
            imageAlt="banner"
        />

         <ChapterLeft
            title="The Challenge"
            text="Quarantine and social distancing have broken the urban life into pieces. People are not allowed to gather together, but this is exactly the moment we need solidarity and support. I believe there are ways to bring people together, and create a different but enhanced pride experience."
        >
        </ChapterLeft>

         <ImageMain
            :imageSrc="root+'pride_2020/02 pride with sd.svg'"
            imageAlt="banner"
        />



        <ChapterRight
            index="04"
            title="Ideation"
            text="Inspired by the art installation, Lichtgrenze, for the 25th aniversary 'Fall of the Berlin Wall', and one of the most famouse anit-war songs in the 1980s, 99 Luftballons. Balloon has served as a symbol of hope, wonder, and freedom. In modern pop culture, it is also used by the fandom as an item of support. So I decided to implant balloon as a media."
        >
        </ChapterRight>


           <img :src="root+'pride_2020/03 inspiration.svg'" class="diagram margin-top" alt="design system">

        <ChapterLeft
            title="Concept Sketch"
            text=""
        />

        <ImageMain
            :imageSrc="root+'pride_2020/04 concept.svg'"
            imageAlt="banner"
         />

           <ChapterLeft
            title="Concept User Flow"
            text=""
        />
        <img :src="root+'pride_2020/05 user flow.svg'" class="diagram margin-top" alt="design system">




        <ChapterRight
            index="05"
            title="Wireframe"
            text=""
        >
        </ChapterRight>


         <img :src="root+'pride_2020/06 wireframe.svg'" class="diagram margin-top" alt="design system">



         <ChapterRight
            index="06"
            title="Prototype"
            text=""
        >
        </ChapterRight>

        <VideoMain
            :isReversed="true"
            backgroundColor="#000"
            textColor="#fff"
            :videoSrc="root+'pride_2020/07 prototype 1.mp4'"
            videoTitle="Look Around | Camera View"
            videoDescription="With phone camera and GPS information, user can view balloons that were sent off by other users. The balloons fly slower towards the marching route to join the main parade."
        />

        <VideoMain
            :isReversed="false"
            backgroundColor="#000"
            textColor="#fff"
            :videoSrc="root+'pride_2020/08 prototype 2.mp4'"
            videoTitle="Stories | Zoom In"
            videoDescription="Click on a group of balloons. The view will zoom in, and show the stories from the tapped area. Click on one of the balloon, user can access to 3D view by dragging the balloon, and also read the description of the story, the live comments, add comments or double tap to like the story."
        />

        <VideoMain
            :isReversed="true"
            backgroundColor="#000"
            textColor="#fff"
            :videoSrc="root+'pride_2020/09 prototype 3.mp4'"
            videoTitle="My Story | Add Balloon"
            videoDescription="User can add their own balloon by clicking the '+' button, and the button will help user walk through the creating process. User can choose the color of the balloon, add photo, video and text. In the end, user will send away the balloon. As the balloon is off, other user can react to the balloon. User will receive the likes and comments from others."
        />





        <Footer
            pName="DREAMATORIUM"
            pLink="https://weijiefu.design/dreamatorium"
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
import ImageGallery from '@/components/Works/ImageGallery.vue';


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
        ImageGallery,
        VideoMain



    }
}
</script>
<style scoped>
.container{

    background-color: #fff;
    width: 100vw;


}
.diagram{
    width: 100%;
}
.margin-top{
    margin-top: 5rem;
}
</style>
