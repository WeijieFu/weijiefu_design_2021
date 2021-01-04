<template>
    <div class="icons-container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.icons-container{
    width: 40vw;
    display: flex;
    margin-bottom: 3rem;
    justify-content: space-evenly;
}
    @media only screen and (max-width: 600px) {
        .icons-container{
            margin-left: 4rem;
        }
    }
</style>