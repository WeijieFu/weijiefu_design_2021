<template>
  <div class="canvas">
    
  </div>
</template>

<script>

import sceneInit from '@/components/ThreeScene.js';

export default {
     mounted(){
        this.root = document.querySelector('.canvas');
        sceneInit(this.root);
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
</style>