<template>
    <div class="mouse" :style="{ left: x +'px', top: y + 'px'}">
       
            <svg height="150" width="150">
                <circle cx="75" cy="75" r="75"  />
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
        window.addEventListener('mousemove', this.onMouseMove);
    },
    methods:{
        onMouseMove(e){
            this.x = e.clientX;
            this.y = e.clientY;
            // console.log(this.x, this.y);
        }
    }
}
</script>
<style scoped>
.mouse{
    width: 150px;
    height: 150px;
    z-index: 999;
    position: fixed;

    transform-origin: center;
    transform: translate(-50%, -50%) scale(0.1);
    pointer-events: none;
}
.mouse svg{
    fill: #fff;
}



</style>