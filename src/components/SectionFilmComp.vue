<template>
  <section class="d-flex flex-wrap">
    <ul 
    v-for="(film, index) in films" :key="index"
    class="col-2 ">
      <li>{{film.title}}</li>
      <li>{{film.original_title}}</li>
      <li>{{film.original_language}}</li>
      <li>{{film.vote_average}}</li>
    </ul>
    
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
   ul{
     color: #FFFFFF;
   };
 };
</style>