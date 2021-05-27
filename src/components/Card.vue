<template>
  <ul class="col-12 mb-5 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
    <li></li>
    <li>{{card.title || card.name}}</li>
    <li>{{card.original_title || card.original_name}}</li>
    <li
    v-if="card.original_language !== 'en' && card.original_language !== 'it'"
    >Lingua: {{card.original_language}}</li>
    <li
    v-if="card.original_language === 'en' || card.original_language === 'it'"
    >Lingua: <img src="../assets/img/flag-e+'imgs[card.original_language]'+.svg" alt="flag.en"></li>
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
  border-left: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
    li{
      font-size: 13px;
      padding-right: 10px;
      img{
        width: 15px
      }
    };
};
</style>