<template>
  <div class="big-box col-12 mb-4 col-md-6 col-lg-4 col-xl-3">
    <div class="primary-box">
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
          <h5>{{card.overview}}</h5>
        </li>
        <li v-if="card.overview === ''">
          <h6>Nessuna descrizione trovata</h6>
        </li>
      </ul>
    </div>

  </div>
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
div.big-box{
  color: #FFFFFF;
  padding: 0;
  position: relative;
  div.primary-box{
    font-size: 22px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    transition-timing-function: linear;
    /* transition: height 3s ease-out, width 5s ease-in; */ 
    &:hover{
      width: 120%;
      position: absolute;
      z-index:6;
      top:-5vh;
      margin-left: -10%;
      height: 70vh;
    }
    &:hover img.cover, .not-found, ul.back-card{
      height: 70vh;
    } 
    &:hover .not-found{
      height: 70vh;
    } 
    &:hover ul.back-card{
      height: 70vh;
      visibility: visible;
      cursor: pointer;
    } 
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
    ul.back-card{
      padding: 0;
      visibility: hidden;
      position: absolute;
      top: 0%;
      width: 90%;
      height: 60vh;
      background-color: #000000;
      opacity: 0.8;
      overflow: auto;
      transition: all 0.3s;
      transition-timing-function: linear;
      li{
        text-align: center;
        line-height: 30px;
        .flag{
          width: 30px;
          height: 20px;
          margin-left: 5px;
          margin-top:5px;
        }
        &.star{
          color: #FFBD00;
          margin-top: 10px;
        }
        &:first-child{
          margin-top: 15px;
        }
        h5{
          margin-top: 10px;
          font-size: 15px;
          line-height: 18px;
          text-align: left;
          padding: 0  10px;
        }
        h6{
          margin-top: 10px;
          font-size: 15px;
          text-align: center;
        }
      }
    }
  };
};
</style>