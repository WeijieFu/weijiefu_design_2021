<template>
    <div class="start" >
        <svg  class="start_line" height="7rem" width="5rem">
            <line x1="2.5rem" y1="0" x2="2.5rem" y2="7rem" />
        </svg>
        
        <svg height="1rem" width="1rem" class="start_circle" @click="onClick">
            <a href="#" v-scroll-to="'#about'">
                <rect width="1rem" height="1rem"  />
            </a>
        </svg>
      
        
    </div>
</template>
<script>
export default {
    data(){
        return{
         
        }

    },
   
    methods:{
        onClick(){
            this.$store.commit('showNav');
        }
    }
}
</script>
<style scoped>
.start{
    position: absolute;
    bottom: 5rem;
    left: 50vw;
    transform: translateX(-50%);

    display:flex;
    flex-direction: column;
    align-items: center;

    z-index: 101;
}

.start_circle {
    stroke: var(--color-text-grey);
    stroke-width: 2px;
    fill: none;
    
    transition: all 0.2s ease-out;
    margin-top: 1rem;

    transform: rotate(45deg);
   
}

.start_circle:hover {
    stroke: #fff;
    fill: #fff;
    transform: scale(1.5,1.5) rotate(720deg);
}

.start_line {
    stroke: var(--color-text-grey);
    stroke-dasharray: 7rem;
    stroke-dashoffset: 14rem;
    animation: start 1.5s ease-out 0s infinite;
}



@keyframes start {
    0%{
       
        stroke-dashoffset: 14rem;
    }
    100%{
       
        stroke-dashoffset: 0;
    }
}



</style>