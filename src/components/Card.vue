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
    <li class="star d-flex flex-row justify-content-center" v-html="mathStar(card)"></li>
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
 },
  methods:{
    mathStar(object){
      let number = Math.round(object.vote_average / 2);
      let starNumber=``;
      let straNull =``;
      for(var i=0; i < number; i++){
        starNumber += `<i class="fas fa-star"></i>`;
      }
      for(var b=0; b < (5-number);b++){
        straNull +=  `<i class="far fa-star"></i>`;
      }
      let star = starNumber+straNull;
      console.log(star);
      return star
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
        height: 40vh;
        margin-bottom:20px;
      }
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
      }
      &.star{
        color: #FFBD00;
      }
    };
};
</style>