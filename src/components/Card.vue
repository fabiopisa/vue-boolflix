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
        <li class="star d-flex flex-row">

          <span><strong>Voto: </strong></span>
          <div class="empty">
            <div class="inner">
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
          <div class="solid" :style="`width:${12.4*card.vote_average}px`">
            <div class="inner">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

        </li>
        <li>

          <h5 class="open-text text-center"
          @click="showOverview = true" 
          v-if="showOverview === false" >
            Clicca per saperne di più...
          </h5>
          <h5 v-if="showOverview=== true" >
            {{card.overview}}
            <h6 class="close-text"
            @click="showOverview = false"
            >
              Clicca qui per chiudere.
            </h6>
          </h5>

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
     },
     showOverview:false,
   }
 },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/stylesCard.scss';
</style>