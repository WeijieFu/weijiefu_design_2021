<template>
    <div class="nav">
        <div class="nav_">
            <svg height="10" width="10" class="nav_circle" :class="{isBlack : isBlack}">
                 <polygon points="0,10 10,10 10,0"  />
            </svg>
            <a class="nav_link" href="#" v-scroll-to="'#about'">ABOUT</a>
        </div>
         <div class="nav_" >
            <svg height="10" width="10" class="nav_circle" :class="{isBlack : isBlack}">
                 <polygon points="0,10 10,10 10,0"  />
            </svg>
            
            <a class="nav_link" href="#" v-scroll-to="'#work'">WORK</a>
        </div>
         <div class="nav_" >
            <svg height="10" width="10" class="nav_circle" :class="{isBlack : isBlack}">
                 <polygon points="0,10 10,10 10,0"  />
            </svg>
            
            <a class="nav_link" href="#" v-scroll-to="'#contact'">CONTACT</a>
        </div>
    </div>
</template>
<script>
export default {
  props:{
      isBlack: Boolean,
  }
}
</script>
<style scoped>
    .nav{
        z-index: 102;
        width: 100vw;
        padding: 0 5vw;
        position: fixed;
        top: 1rem;
        
         display: flex;
        justify-content: space-between;
        align-items: center;

        font-family: 'Exo 2', sans-serif;
    }
    .nav_circle{
        fill: #fff;
        transition: all 0.2s ease-out;
    }
    .nav_:hover > .nav_circle{
        transform: rotate(45deg);
    }
   .nav_link{
       margin-left: 0.5rem;
       transition: all 0.2s ease-out;
       text-decoration: none;
       color: var(--color-text-grey);
   }
   .nav_:hover > .nav_link{
       color:#fff
   }
   .isBlack{
       fill: #000;
   }
   .isBlack:hover > .nav_link{
       color: #000;
   }
</style>