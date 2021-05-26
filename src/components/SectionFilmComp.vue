<template>
  <section>
    <h2>Films</h2>
    <div class="d-flex flex-wrap">
      <ul 
      v-for="(film, index) in films" :key="index"
      class="col-3 mb-5">
      <li></li>
      <li>{{film.title}}</li>
      <li>{{film.original_title}}</li>
      <li>Lingua: {{film.original_language}}</li>
      <li>Voto: {{film.vote_average}}</li>
    </ul>
    </div>
    
  </section>
</template>

<script>
export default {
 name:'SectionFilmComp',
 props:{
   films: Array,
 }
}
</script>

<style lang="scss" scoped>
 section{
   padding: 50px 100px;
   h2{
     margin-bottom: 30px;
     color: #ec0000c0;
   };
   ul{
     color: #FFFFFF;
     border-left: 1px solid #FFFFFF;
     li{
       font-size: 13px;
       padding-right: 10px;
     };
   };
 };
</style>