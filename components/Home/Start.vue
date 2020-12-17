<template>
    <div class="start" >
        <svg  class="start_line" height="7rem" width="5rem">
            <line x1="2.5rem" y1="0" x2="2.5rem" y2="7rem" />
        </svg>
        
        <svg height="2rem" width="2rem" class="start_circle" @click="onClick">
            <a href="#" v-scroll-to="'#about'">
                <circle cx="1rem" cy="1rem" r="1rem" />
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
    fill: var(--color-text-grey);
    stroke-width: 2px;
    transition: all 0.2s ease-out;
    margin-top: 1rem;
}

.start_circle:hover {
    cursor: pointer;
    transform: scale(1.5,1.5);
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