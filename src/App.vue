<template>
  <div id="app">
    <HeadreComp
    @startSearch="startSearch"
    />
    <h1
    v-if="result.movie.length === 0 && result.tv.length === 0 "
    >
      Nessun risultato trovato
    </h1>

    <h2 class="home-films" v-if="TitleMoments === true">Titoli del momento</h2>
    
    <MainComp
    v-if="result.movie.length > 0"
    :list="result.movie"
    type='movie'
    />
    <MainComp
    v-if="result.tv.length > 0"
    :list="result.tv"
    type='tv'
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
      apiURL:'https://api.themoviedb.org/3/search/',
      apiKey:'fe3d6561f77f954abef97c97d11254e0',
      result:{
        'movie':[],
        'tv':[],
      },
      TitleMoments:true,
    }
  },
  created(){
    let type = 'movie'
    axios.get('https://api.themoviedb.org/3/movie/popular',{
      params:{
        api_key: this.apiKey,
        language: 'it-IT'
      }
    })
    .then(res => {
      this.result[type] = res.data.results;
    })
    .catch(err => {
      console.log(err);
    })
    
  },
  methods:{
    
    getApi(query, type){
      axios.get(this.apiURL + type,{
        params:{
          api_key: this.apiKey,
          query: query,
          language:'it-IT',
        },
      })
      .then(resp => {
        this.result[type] = resp.data.results;
        console.log('movie' ,this.result.movie);
        console.log('serie tv' ,this.result.tv);
      })
      .catch(err =>{
        console.log(err);
      })
      
    },
    
    resetResults(){
      this.result.movie = [];
      this.result.tv = [];
    },

    startSearch(obj){
      this.TitleMoments = false;
      this.resetResults();
      if(obj.type === 'all'){
        this.getApi(obj.text, 'movie');
        this.getApi(obj.text, 'tv');
      }
    },
  },
  
}
</script>

<style lang="scss">
@import '@/assets/styles/general.scss';
h1{
  margin-left: 10%;
  margin-top:10vh
}
h2.home-films{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 40px;
  font-weight: bold;
  color: #FFFFFF;
}
</style>
