<template>
  <div id="app">
    <HeadreComp/>

    <main>
      <SectionFilmComp/>
    </main>
  </div>
</template>

<script>
import HeadreComp from './components/HeadreComp.vue'
import SectionFilmComp from './components/SectionFilmComp.vue'


export default {
  name: 'App',
  components: {
    HeadreComp,
    SectionFilmComp
    
  },
  data(){
    return{
      apiURL:'https://api.themoviedb.org/3/search/movie',
      apiKey:'fe3d6561f77f954abef97c97d11254e0',
      query:'ritorno al futuro',
    }
  },
  methods:{
    readArrFilm(){
      this.axios.get(this.apiURL,{
        params:{
          api_key: this.apiKey,
          query: this.query,
          language:'it-IT'
        }
      })
      .then(resp => {
        console.log(resp.results);
      })
      .catch(err =>{
        console.log(err);
      })
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/general.scss';
</style>
