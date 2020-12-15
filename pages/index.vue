<template>
  <div class="container">
     <Header />
    <ThreeScene />

  </div>
</template>

<script>
import ThreeScene from '@/components/ThreeScene.vue';
import Header from '@/components/Home/Header.vue';

export default {

  components :{
    ThreeScene,
    Header,

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
}
</style>
