<template>
    <div class="nav">
        <div class="nav_about">
            <svg height="0.5rem" width="0.5rem" class="nav_circle" fill="yellow">
                 <polygon points="0rem,0.5rem 5rem,0.5rem 0.5rem,0"  />
            </svg>
            
            <a class="nav_link">ABOUT</a>
        </div>
         <div class="nav_work">
            <svg height="0.5rem" width="0.5rem" class="nav_circle">
                 <circle cx="0.25rem" cy="0.25rem" r="0.25rem" />
            </svg>
            
            <a class="nav_link">WORK</a>
        </div>
         <div class="nav_contact">
            <svg height="0.5rem" width="0.5rem" class="nav_circle">
                 <circle cx="0.25rem" cy="0.25rem" r="0.25rem" />
            </svg>
            
            <a class="nav_link">CONTACT</a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav{
        z-index: 102;
        width: 90vw;
        position: fixed;
        bottom: 1rem;
        color: var(--color-text-grey);
         display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav_circle{
        fill: #fff;
    }
   

</style>