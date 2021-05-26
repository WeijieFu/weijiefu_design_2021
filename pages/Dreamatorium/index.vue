<template>
    <div class="container">
        <Mouse :isBlack="true"/>
        <HomeButton/>

        <iframe src="https://elastic-dijkstra-f80045.netlify.app/" title="Ducky 3d's 80s animation loop" class="no-pointer" ></iframe>
        <div class="enter">
            <a href="https://elastic-dijkstra-f80045.netlify.app/" target="_blank" >DUCKY3D's 80s Loop &rarr;</a>
            <p>Blender, ReactJS, ThreeJS, WebGL</p>
        </div>


        <iframe src="https://friendly-panini-d29995.netlify.app/" title="Triangle tunnel"  class="no-pointer"></iframe>
        <div class="enter">
            <a href="https://friendly-panini-d29995.netlify.app/" target="_blank">TRIANGLE TUNNEL &rarr;</a>
            <p>Blender, ReactJS, ThreeJS, WebGL</p>
        </div>

        <iframe src="https://tender-leavitt-8d4f37.netlify.app/" title="Kiss" class="no-pointer" ></iframe>
        <div class="enter">
            <a href="https://tender-leavitt-8d4f37.netlify.app/" target="_blank">KISS &rarr;</a>
            <p>ThreeJS, WebGL, Raymarching</p>
        </div>


        <iframe src="https://musing-leavitt-544406.netlify.app/" title="Swirl"  class="no-pointer"></iframe>
        <div class="enter">
            <a href="https://musing-leavitt-544406.netlify.app/" target="_blank">SWIRL &rarr;</a>
            <p>ThreeJS, WebGL, Particles</p>
        </div>

        <iframe src="https://silly-ptolemy-b99751.netlify.app/" title="Kinectic typography"  ></iframe>
        <div class="enter">
            <a href="https://silly-ptolemy-b99751.netlify.app/" target="_blank">KINECTIC TYPOGRAPHY &rarr;</a>
            <p>Html Canvas, Particles</p>
        </div>

        <iframe src="https://hungry-noyce-44af00.netlify.app/" title="Kinectic typography"  ></iframe>
        <div class="enter">
            <a href="https://hungry-noyce-44af00.netlify.app/" target="_blank">MOVIE NIGHT &rarr;</a>
            <p>ThreeJS, Blender, Texture Baking</p>
        </div>

         <iframe src="https://keen-bohr-2a2cac.netlify.app/" title="Kinectic typography"  ></iframe>
        <div class="enter">
            <a href="https://keen-bohr-2a2cac.netlify.app/" target="_blank">ROCK PAPER SCISSORS &rarr;</a>
            <p>ThreeJS, Blender, Rigging</p>
        </div>


    </div>
</template>
<script>
import Mouse from '@/components/Mouse.vue';
import HomeButton from '@/components/Works/HomeButton.vue';



export default {
    components:{
        Mouse,
        HomeButton,

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
    /* pointer-events: none; */

}
.enter{
    font-family: 'Exo 2', sans-serif;
    margin-top: 2rem;
    margin-left: 50vw;
    padding-bottom: 5rem;
    line-height: 150%;

}
.enter a{
    transition: all 0.25s ease-out;
    text-decoration: none;
    color: #000;
    font-size: 1.25rem;
}
.enter a:hover {
    color: #999
}

.enter p{
    color: #ddd;
}
.no-pointer{
    pointer-events: none;
}
 @media only screen and (max-width: 600px) {
        .enter {
              margin-left: 10vw;
              padding-bottom: 2rem;
        }
        .enter p{
            font-size: 0.75rem;
        }

    }
</style>
