<template>
  <div id="app">
    <HeadreComp
    :search="readArrFilm"
    @searchFilms="writeFilm"
    />

    
    <MainComp
    :films="arrFilm"
    />
    
  </div>
</template>

<script>
import axios from 'axios';
import HeadreComp from './components/HeadreComp.vue';
import MainComp from './components/MainComp.vue';


export default {
  name: 'App',
  components: {
    HeadreComp,
    MainComp
    
  },
  data(){
    return{
      apiURL:'https://api.themoviedb.org/3/search/movie',
      apiKey:'fe3d6561f77f954abef97c97d11254e0',
      query:'',
      arrFilm:[],
    }
  },
  methods:{
    
    readArrFilm(){
      console.log(this.query);
      axios.get(this.apiURL,{
        params:{
          api_key: this.apiKey,
          query: this.query,
          language:'it-IT',
        },
      })
      .then(resp => {
        this.arrFilm = resp.data.results;
        console.log(this.arrFilm);
      })
      .catch(err =>{
        console.log(err);
      })
      
    },

    writeFilm(text){
      this.query = text;
      console.log(this.query);
    }

  }
}
</script>

<style lang="scss">
@import '@/assets/styles/general.scss';
</style>
