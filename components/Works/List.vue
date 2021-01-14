<template>
    <div class="list">
        <div class="list_item" v-for="listItem in listItems" :key="listItem">{{listItem}}</div>
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
        
    }


    @media only screen and (max-width: 600px) {
        .list{
            font-size: 0.8rem;
        }
    }
</style>