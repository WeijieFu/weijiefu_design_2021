<template>
  <div class="title_container">
      <div class="date">
          {{date}}
      </div>
      <div class="title" :style="{fontSize: titleFont + 'vw'}">
          {{title}}
      </div>
     
      <div class="tag">
          <strong>SUMMARY</strong><br>
          {{tag}}
      </div>
      <div class="row">
           
          <div class="col">
              <div class="roles">
                  <strong>MY ROLE</strong><br>
                  <span class="role" v-for="role in getRoles" :key="role">{{role}}<br></span>
              </div>
          </div>
        
      </div>
  </div>
</template>

<script>
export default {
    props:{
        date: String,
        title: String,
        tag: String,
        role: String,
        titleFont: Number,
    },
    methods:{
    
    },
    computed:{
        getRoles(){
            return this.role.split(',');
        }
    },
    
    
}
</script>

<style scoped>
    .title_container{
        margin-left: 50vw;
        width: 50w;
        /* position: absolute; */
        padding-top: 8rem;

        font-family: 'Exo 2', sans-serif;
        line-height: 1.5;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .title{
        font-weight: 400;
        line-height: 1;
        margin-bottom: 8rem;
        z-index: 555;
        margin-top: 2rem;
        margin-left: -5rem;
        color: #cecece;
    }

    .tag{
        width: 75%;
        font-size: 0.8rem;
    }
    .row{
        font-size: 0.8rem;
        width: 75%;
        margin-top: 2rem;    
    }
    .col{
        margin-bottom: 1rem;;
    }
    .date{

        font-weight: 300;
    }
  
    @media only screen and (max-width: 600px) {
        .title_container{
            margin-left: 2rem;
            width: 90vw;
        }
        .title{
            color: #cecece;
            margin-left: 0rem;
            font-size: 5rem !important;
        }
    }
    
</style>>

