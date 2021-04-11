<template>
    <div class="container">
        <div class="arrow" @click="handlePageLeft">
            <svg height="60" width="30">
                <line x1="30" y1="0" x2="1" y2="30" style="stroke:rgb(0,0,0);stroke-width:1"   stroke-linecap="round"/>
                <line x1="30" y1="60" x2="1" y2="30" style="stroke:rgb(0,0,0);stroke-width:1"   stroke-linecap="round"/>
            </svg>

        </div>

        <div class="image-container">
            <img :src="src+ prev +'.png'" alt="imagegallery" draggable="false">
            <img :src="src+ page +'.png'" alt="imagegallery" draggable="false">
            <img :src="src+ next +'.png'" alt="imagegallery" draggable="false">
        </div>

        <div class="index">{{ `${page} / ${length}`}}</div>
      
        <div class="arrow" @click="handlePageRight">
            <svg height="60" width="30">
                <line x1="0" y1="0" x2="29" y2="30" style="stroke:rgb(0,0,0);stroke-width:1"   stroke-linecap="round"/>
                <line x1="0" y1="60" x2="29" y2="30" style="stroke:rgb(0,0,0);stroke-width:1"   stroke-linecap="round"/>
            </svg>
             
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           page : 1
        }
    },
    props:{
        src : String,
        length : Number,
    },
    computed:{
        prev(){
            if(this.page > 1){
                return this.page - 1
            }else{
                return this.length
            }
        },
        next(){
            if(this.page < this.length){
                return this.page + 1
            }else{
                return 1
            }
        }
    },
    methods:{
        handlePageLeft(){
            if(this.page > 1){
                this.page--
            }else{
                this.page = this.length
            }

        },
        handlePageRight(){
             if(this.page < this.length){
                this.page++
            }else{
                this.page = 1
            }
        }
    }

}
</script>
<style scoped>
    .container{
        width: 100vw;
        margin-top: 10rem;
        padding: 0 5vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

    }
    .image-container {
        display: flex;
        width: 70vw;
        overflow:hidden;
        box-shadow: 0px 0px 50px rgb(223, 223, 223);
    }

    .image-container img{
        width: 70vw;
        transform: translateX(-70vw);
   
   
    }
    .index{
        position: absolute;
        bottom: -3rem;
        left: 50vw;
        transform: translateX(-50%);
        font-size: 0.75rem;
    }

    .arrow{
        width: 5vw;
        transition: transform 0.1s ease-out;
        transform-origin: center;
    }
    .arrow:hover{
        transform:scale(1.1);
    }
</style>