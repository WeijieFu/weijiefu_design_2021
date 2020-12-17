<template>
    <div class="light" :style="{ left: x +'px', top: y + 'px'}">
       
            <svg height="150" width="150">
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="10%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
                    
                    </radialGradient>
                </defs>
                <circle cx="75" cy="75" r="75" fill="url(#grad1)" />
            </svg>
      
        
        <!-- <svg height="10" width="10" class="point">
            <circle cx="5" cy="5" r="5" fill="red" />
        </svg> -->

    </div>
</template>
<script>
export default {
    data(){
        return{
            x: -1000,
            y: -1000,
        }
    },
    mounted(){
        window.addEventListener('mousemove', this.onLightMove);
    },
    methods:{
        onLightMove(e){
            this.x = e.clientX;
            this.y = e.clientY;
            // console.log(this.x, this.y);
        }
    }
}
</script>
<style scoped>
.light{
    width: 150px;
    height: 150px;
    z-index: 999;
    position: fixed;
    mix-blend-mode: overlay;
    transform-origin: center;
    transform: translate(-50%, -50%) scale(3);
    pointer-events: none;
    
}



</style>