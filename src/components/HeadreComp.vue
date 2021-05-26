<template>
  <header class="d-flex align-items-center">
    <div class="logo col-3 offset-1">
      <h1>boolflix</h1>
    </div>

    <div class="box-search col-3 offset-4 d-flex justify-content-evenly">
      <input
      @keyup="startSearch"
      v-model.trim="strFilm" 
      type="text" placeholder="Cerca qui il tuo film...">
      <button
      @click="search" 
      class="btn btn-outline-danger">Cerca</button>
    </div>
  </header>
</template>

<script>
export default {
 name:'HeaderComp',
 props:{
   search: Function,
 },
 data(){
   return{
     strFilm:'',
   }
 },
 methods:{
    startSearch(){
      this.$emit('searchFilms', this.strFilm);
      console.log(this.strFilm);
    }
 }
}
</script>

<style lang="scss" scoped>
header{
  background-color:#000000;
  height: 80px;
  .logo{
    h1{
      color: #EC0000;
      text-transform: uppercase;
      margin:0;
    };
  };
  .box-search{
    input{
      border: none;
      padding:0 20px;
      border-radius:5px;
      outline: none;
      &:hover{
        border: 1px solid #EC0000;
      };
    };
  };

}
</style>