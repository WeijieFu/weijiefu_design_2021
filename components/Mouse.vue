<template>
    <div class="mouse" :style="{ left: x +'px', top: y + 'px'}" :class="{isBlack : isBlack}">
       
            <svg height="150" width="150">
                <rect width="150" height="150"  />
            </svg>
      
        
        <!-- <svg height="10" width="10" class="point">
            <circle cx="5" cy="5" r="5" fill="red" />
        </svg> -->
    </div>
</template>
<script>
export default {
    props:{
        isBlack : Boolean,
    },

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
    animation-name: square;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    backdrop-filter: invert(100%);

    
}
.mouse svg{
    fill: #fff;
    opacity: 0;
}
.isBlack svg{
    fill: #000;
      opacity: 0;
}
@keyframes square {
    0%{
        transform: translate(-50%, -50%) scale(0.1) rotate(0);
    }
    100%{
        transform: translate(-50%, -50%) scale(0.1) rotate(360deg);
    }
    
}

</style>