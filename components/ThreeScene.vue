<template>
  <div class="canvas">
  </div>
</template>

<script>
import * as THREE from 'three'
import sceneInit from '@/components/ThreeScene.js';

export default {
    data(){
      return{
        options: {
          perlin: {
            vel: 0.002,
            speed: 0.00050,
            perlins: 1.0,
            decay: 0.01,
            complex: 0.1,
            waves: 20.0,
            eqcolor: 11.0,
            fragment: true,
            redhell: true
          },
          spin: {
            sinVel: 0.0,
            ampVel: 80.0,
          }
        }
      }
    },
    methods:{
      
    },

    mounted(){
        this.root = document.querySelector('.canvas');
        this.scene = sceneInit(this.root, this.options);
    },


  
}


</script>

<style scoped>
.canvas {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top:0;
    left: 0;
}

button {
  z-index: 100000;
  position: fixed;
}
</style>