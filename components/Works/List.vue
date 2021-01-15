<template>
    <div class="list">
        <div class="list_item" v-for="listItem in listItems" :key="listItem"><div>{{listItem}}</div><br></div>
    </div>
</template>
<script>
export default {
    props:{
        listItems : Array,
    }
}
</script>
<style scoped>
    .list{
        margin-top: 2rem;
        color: #cecece;
        width: 40vw;
        
    }


    @media only screen and (max-width: 600px) {
        .list{
            font-size: 0.8rem;
            width: 80vw;
        }
    }
</style>