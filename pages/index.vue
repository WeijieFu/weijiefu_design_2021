<template>
  <div class="container">
    <ThreeScene />
    <Header />
    <About />
    <Work />
    <Contact />
    <Nav/>

    

      

  </div>
</template>

<script>
import ThreeScene from '@/components/ThreeScene.vue';
import Header from '@/components/Home/Header.vue';
import About from '@/components/Home/About.vue';
import Contact from '@/components/Home/Contact.vue';
import Nav from '@/components/Home/Nav.vue';




export default {

  components :{
    ThreeScene,
    Header,
    About,
    Contact,
    Nav,



  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

}



</style>
