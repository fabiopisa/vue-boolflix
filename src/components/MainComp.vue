<template>
  <main class="p-5">
    <h2>{{ titles[type] }}</h2>
    <div class="d-flex flex-wrap">
      <Card
      v-for="card in list" :key="card.id"
      :card="card"
      />
    </div>
  </main>
</template>

<script>
import Card from '@/components/Card'
export default {
 name:'MainComp',
 components:{
   Card
 },
 data(){
   return{
     titles:{
       'movie': 'Film',
       'tv': 'Serie TV'
     },
   }
 },
 props:{
   type: String,
   list: Array,
 }
}
</script>

<style lang="scss" scoped>
 main{
   h2{
     margin-bottom: 30px;
     color: #ec0000c0;
     margin-left: 15px;
     font-size: 50px;
     text-shadow: 1px 5px 10px rgba(0,0,0,0.5)
   };
 };
</style>