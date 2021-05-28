<template>
  <ul class="col-12 mb-5 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
    <li>
      <img  v-if="card.poster_path !== null" class="cover" :src="'https://image.tmdb.org/t/p/w342/'+card.poster_path" alt="">

      <div class="not-found" v-if="card.poster_path === null">
        <h3>{{card.title || card.name}}</h3>
        <h3>Not found cover</h3>
      </div>
    </li>
    <li>{{card.title || card.name}}</li>
    <li>{{card.original_title || card.original_name}}</li>
    <li
    class="d-flex flex-row justify-content-center"
    v-if="flags.includes(card.original_language)"
    >
      Lingua: <img class="flag" :src="require('../assets/img/flag-'+imgs[card.original_language]+'.svg')" :alt="'flag-'+imgs[card.original_language]">
    </li>
    <li v-else>
      Lingua: {{card.original_language}}
    </li>
    <li>Voto: {{card.vote_average}}</li>
  </ul>
</template>

<script>
export default {
 name:'Card',
 props:{
   card: Object
 },
 data(){
   return{
     flags:['en', 'it'],
     imgs:{
       'en': 'en',
       'it': 'it'
     }
   }
 }
}
</script>

<style lang="scss" scoped>
ul{
  color: #FFFFFF;
  padding: 0;
    li{
      font-size: 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .cover{
        width: 90%;
        height: 40vh;
        margin-bottom:20px;
      };
      .not-found{
        width: 90%;
        height: 40vh;
        background-color: rgba(0,0,0,0.5);
        text-align: center;
        border: 1px solid #000000;
        margin-bottom:20px;
        h3{
          color: #FFFFFF;
          margin: 25px 0;
        }
      }
      .flag{
        width: 15px;
        margin-left: 5px;
      };
    };
};
</style>