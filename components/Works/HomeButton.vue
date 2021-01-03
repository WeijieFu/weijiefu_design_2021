<template>
    <div class="home-button" @click="onClick">
        <svg height="10" width="10" class="home_circle">
                 <polygon points="0,10 10,10 10,0"  />
        </svg>
        Weijie Fu
    </div>
</template>
<script>
export default {
    methods:{
        onClick(){
            this.$router.push({path:"/"});
        }
    }
}
</script>

<style scoped>
    .home-button {
        font-family: 'Exo 2', sans-serif;
        font-weight: 600;
        position: fixed;
        left: 2rem;
        top: 1rem;
        transition: all 0.2s ease-out;
        animation: 1s ease-in-out 0s slidedown;

    }
    .home-button:hover{
        color: var(--color-text-grey);
    }
    @keyframes slidedown {
        0%{
            transform: translateY(-0.5em);
            opacity: 0;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }
    .home_circle{
        fill: #000;
        transition: all 0.2s ease-out;
    }
    .home-button:hover > .home_circle{
        transform: rotate(135deg);
    }
</style> scoped>

