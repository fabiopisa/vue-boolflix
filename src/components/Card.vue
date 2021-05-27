<template>
  <ul class="col-12 mb-5 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
    <li></li>
    <li>{{card.title || card.name}}</li>
    <li>{{card.original_title || card.original_name}}</li>
    <li>Lingua: {{card.original_language}}</li>
    <li>Voto: {{card.vote_average}}</li>
  </ul>
</template>

<script>
export default {
 name:'Card',
 props:{
   card: Object
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
    };
};
</style>