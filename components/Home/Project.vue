<template>
    <div class="project" @mouseover="isHover=true" @mouseleave="isHover=false"  @click="openLink">
            <div class="left">
                <div class="project_title">
                    <div class="project_index">{{pIndex}}</div>
                    <div class="project_name">{{pName}}</div>
                </div>
                <transition name="slideIn">
                    <div class="project_description" v-show="isHover"><span>MY ROLL</span>{{pRole}}</div>
                </transition>
            </div>
            <transition name="slideIn">
            <div class="right" v-show="isHover" :class="{ arrowdown : pArrow}">
                <svg width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg" class="project_link">
                    <path d="M2 202L202 2"  stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M102 2H202V102"  stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            </transition>
    </div>
</template>
<script>
export default {
     data(){
        return{
            isHover : false,
        }
    },
    props:{
        pIndex: String,
        pName: String,
        pRole: String,
        pLink: String,
        pArrow: Boolean,
    },
    methods:{
        openLink(){
            window.open(this.pLink, "_blank");
        }
    }
}
</script>
<style scoped>
    .project{
        
        text-align: left;
        color: var(--color-text-grey);
        font-family: 'Exo 2', sans-serif;
        margin-left: 0.5rem;

        display: flex;
        align-items: flex-start;
        height: 7rem;
        transition: all 0.5s;
    }
    .project:hover{
        height: 10rem;
    }

   
    .right{
        /* background-color: bisque; */

        transform: scale(0.5) translateY(-2.8rem);
    }
    .arrowdown{
        transform: scale(0.5, -0.5) translateY(4.5rem) rotate(45deg);
    }
    .project_link{
        stroke :var(--color-text-grey);
        stroke-width: 3px;
       

    }
   
    .project_title{
        display: flex;
        align-items: baseline;
    }
    .project_index{
        font-weight: 300;
        margin-right: 1rem;
    }
    .project_name{
        font-size: 6rem;
    }
    .project_description{
        margin-left: 2rem;
        color: #fff;
    }
    .project_description span{
        font-weight: 900;
        margin-right: 1rem;
        color: #333
    }

    .slideIn-enter-active, .slideIn-leave-active { transition: all .5s; }
    .slideIn-enter, .slideIn-leave-active { opacity: 0; transform: translateY(-1rem) }


    @media only screen and (max-width: 1000px) {
        .project_name{
            font-size: 2rem;
        }
        .project{
            height: 3rem;
        }
        .project:hover{
            height: 6rem;
        }
        .right{
        /* background-color: bisque; */

        transform: scale(0.3) translateY(-15rem);
    }
    .arrowdown{
        transform: scale(0.3, -0.3) translateY(15rem) rotate(45deg);
    }
    }
    @media only screen and (max-width: 600px) {
        .project{
            height: 5rem;
        }
        .title_fill{
            transform: scale(1);
            margin-left: 1rem;
        }
    
        .right{
            display:none !important ;
        }
        .project_description{
            display: block !important;
            font-size: 0.75rem;
            margin-right: 1rem;
        }
        .project_description span{
            display: none;
        }
    }
</style>