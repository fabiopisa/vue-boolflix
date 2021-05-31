<template>
  <ul class="col-12 mb-4 col-md-6 col-lg-4 col-xl-3">
    <li>
      <img  v-if="card.poster_path !== null" class="cover" :src="'https://image.tmdb.org/t/p/w342/'+card.poster_path" :alt="card.poster_path">

      <div class="not-found" v-if="card.poster_path === null">
        <h3>{{card.title || card.name}}</h3>
        <h3>Not found cover</h3>
      </div>

      <ul class="back-card">
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
        <li>
          <h6>{{card.overview}}</h6>
        </li>
        <li v-if="card.overview === ''">
          <h6>Nessuna descrizione trovata</h6>
        </li>
      </ul>
    </li>

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
  &:hover .back-card{
    visibility: visible;
    cursor: pointer; 
    /* transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function:ease-out;
    transition-delay: 1s; */
  }
    li{
      font-size: 22px;
      line-height: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      img.cover{
        width: 90%;
        height: 60vh;
        margin-bottom:20px;
        cursor: pointer;
      }
      .not-found{
        width: 90%;
        height: 60vh;
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
        width: 30px;
        margin-left: 5px;
      }
      &.star{
        color: #FFBD00;
      }
      ul.back-card{
        visibility: hidden;
        position: absolute;
        top: 0%;
        left:5%;
        width: 90%;
        height: 60vh;
        background-color: #000000;
        opacity: 0.8;
        overflow: auto;
        li{
          text-align: center;
          &:first-child{
            margin-top: 15px;
          }
          h6{
            margin-top: 10px;
            font-size: 15px;
            line-height: 18px;
            text-align: left;
            padding: 0  10px
          }
        }
      }
    };
};
</style>