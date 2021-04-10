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

        <ChapterLeft
            title="Initial Usability Research Phase"
            text="Identify pain points and critical user needs. Understand the base APIs from the engineer.  Save nice-to-have features for further development."
        />

        <ChapterLeft
            title="Project Foundation Phase"
            text="Implement findings from critical pain points, redesign and develop basic user interface for the initial launch."
        />

        <ChapterLeft
            title="Lean Cycle Phase"
            text="Getting feedbacks and make improvements on top of the initial design, develop and launch new features."
        />

        <ChapterRight
            index="03"
            title="Research"
            text=""
        >
            <Icons>
                <Icon
                    :iconSrc="root+'icon/question_answer-24px.svg'"
                    iconAlt="semi-structured interview"
                    iconText="Semi-structured Interview"
                />
                <Icon
                    :iconSrc="root+'icon/perm_identity-24px.svg'"
                    iconAlt="stakeholder interview"
                    iconText="Stakeholder Interview"
                />
            </Icons>
            <Icons>
                <Icon
                    :iconSrc="root+'icon/quiz_black_24dp.svg'"
                    iconAlt="usability testing"
                    iconText="Usability Testing"
                />
                <Icon
                    :iconSrc="root+'icon/phone_iphone_black_24dp.svg'"
                    iconAlt="case study"
                    iconText="Case Study"
                />
            </Icons>
        </ChapterRight>


        <ChapterLeft
            title="Semi-structured Interview"
            text="In oder to get a clear picture of how our primary users are studying for the exams, we started with a round of semi-structured interviews with the target users to understand their's motivation and expectation about online education and assessment services."
        />

        <ImageMain
            :imageSrc="root+'appitur/03_interview_key_finding.png'"
            imageAlt="banner"
        />

        <ChapterLeft
            title=""
            text="Since the existing Appitur apps are for people who are doing professional certification exams (CIA, CMA, etc) and Appitur's clients are established training and education institutions in the field, our target users are professionals in their 20s or 30s looking for career breakthroughs. We gathered a group of 5 to ask how they prepare for professional exams both online and offline, the differences and the frustrations they've encountered."
        />


        <ChapterLeft
            title=""
            text="Key Findings"
        >
        </ChapterLeft>
        <ChapterLeft
            title=""
            text="How do people study for professional certification exams?"
        >
            <List
                :listItems="[
                `- Official study guide book from exam institutes`,
                `- Third party IRL classes`,
                `- Third party study guide book`,
                `- Mock exams and Tests from third party`,
                `- Flashcards either made by themselves or from third party`,
                ]"
            />
        </ChapterLeft>

        <ChapterLeft
            title=""
            text="Behavioural pattern found among target users. Key quotes : "
        >
            <List
                :listItems="[
                `- can't study much on weekdays while I am working`,
                `- 100 hours of study is my goal`,
                `- I like to mark questions I got wrong for further review`,
                `- I prefer 20 questions at a time`,
                `- time management is crucial to exam prep`,
                `- put my phone away when I study on my compute`,
                ]"
            />
        </ChapterLeft>

        <ChapterLeft
            title="Stakeholder Interview"
            text="To understand the business goal for this app, we talked to Kevin, who is the content provider of Hock CIA and CMA apps,  and Tom, the founder of Appitur E-learning Platform. Due to Covid-19 regulation, all interviews were conducted online."
        />
        <ImageMain
            :imageSrc="root+'appitur/04_stakeholder.png'"
            imageAlt="banner"
        />
        <ChapterLeft
            title=""
            text="From our talk with Kevin, we came to understand the interest of Appitur's clients. Kevin, who already has a brand Hock International, would like the app to be an addition to the whole family package (books, videos and test questions) he is offering to his students. In the long term, he hopes the Appitur app could somehow inherit their brand identity. He also shared with us some concerns his students have: "
        >
            <List
                :listItems="[
                `- Provide more explanations (already in database) on all four choices, both right answers and wrong answers.`,
                `- Add flashcards.`,
                `- For performance session, it would be helpful if they can be broken down topic by topic.`,
                `- Sign-up and Log-in is confusing on app.`,
           
                ]"
            />
        </ChapterLeft>

        <ChapterLeft
            title="Usability Testing"
            text="We conducted usability tests with five participants to test the existing product, understand user behaviour and define success for both the users and the stakeholders."
        />
        <ChapterLeft
            title=""
            text="The test session is designed to gather general information from the participants and test usability of Appitur apps. In this case, we are testing the HOCK CIA (Certified Internal Auditor) app since all four apps are quite similar."
        />

         <ImageMain
            :imageSrc="root+'appitur/05_user_testing.png'"
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