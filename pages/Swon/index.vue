<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>
        <Title 
            date="2020"
            title="SWON" 
            :titleFont="10"
            tag="SWON is a canadian architecture firm. We designed and developed this website with a touch of WebGL, which added a third dimension to the screen. The landing page is designed to be a audio-visual experience to tell the story of the architect's philosophy on the history and context of the architecture. In the project page, user can interact with a textureless 3d model, demonstrating the primitive form of the architectural space. "
            role="Brand Concept, Art & Creative Direction, Web Design, Web Development"
        />
        <div class="enter"><a href="https://swon.ca/" target="_blank">Enter SWON &rarr;</a></div>
        <iframe src="https://swon.ca/" title="SWON" ></iframe>
         
        <Footer
            pName="APPITUR"
            pLink="https://weijiefu.design/appitur"
        />
    </div>
</template>
<script>
import Mouse from '@/components/Mouse.vue';
import HomeButton from '@/components/Works/HomeButton.vue';
import Title from '@/components/Works/Title.vue';
import Footer from '@/components/Works/Footer.vue';


export default {
    components:{
        Mouse,
        HomeButton,
        Title,
        Footer,
    }
}
</script>
<style scoped>
.container{

    background-color: #fff;
    width: 100vw;


    
}
iframe {
    margin-top: 5rem;
    width: 80vw;
    height: 45vw;
    margin-left: 10vw;
    border: none;
    pointer-events: none;
}
.enter{
    font-family: 'Exo 2', sans-serif;
    margin-top: 5rem;
    margin-left: 50vw;
}
.enter a{
    transition: all 0.25s ease-out;
    text-decoration: none;
    color: #000;
}
.enter a:hover {
    color: #999
}
</style>