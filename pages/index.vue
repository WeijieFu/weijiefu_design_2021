<template>
  <div class="container">
    <ThreeScene />
    <Header showNav="showNav"/>
    <About />
    <Work />
    <Contact />
    <transition name="navEnter">
      <Nav v-show="showNav" />
    </transition>
    <Footer/>
    <Mouse/>
    <Light/>
  </div>
</template>

<script>
import ThreeScene from '@/components/ThreeScene.vue';
import Header from '@/components/Home/Header.vue';
import About from '@/components/Home/About.vue';
import Contact from '@/components/Home/Contact.vue';
import Nav from '@/components/Home/Nav.vue';
import Footer from '@/components/Home/Footer.vue';
import Mouse from '@/components/Mouse.vue';

import Light from '../components/Light.vue';




export default {
  data(){
    return {
      scrollPosition: 0,
      innerHeight: 0,
    }
  },
  computed:{
    showNav(){
      return this.$store.state.showNav;
    },
  },
  

  components:{
    ThreeScene,
    Header,
    About,
    Contact,
    Nav,
    Footer,
    Mouse,
    Light   

  },

 

   mounted(){
    window.addEventListener('scroll', this.toShowNav);
  },
  methods:{
    toShowNav(){

      if(window.scrollY >= window.innerHeight){
        this.$store.commit('showNav');
      }
    }
  }

}
</script>

<style>
.console{
  position: fixed;
  top: 0;
  left: 0;
  color: red;
  z-index: 9999;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

}
.navEnter-enter-active, .navEnter-leave-active { transition: opacity .5s; transition-delay: 1s; }
.navEnter-enter, .navEnter-leave-active { opacity: 0; }


</style>
