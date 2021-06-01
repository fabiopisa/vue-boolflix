<template>
  <header class=" col-12 d-flex align-items-center">
    <div class="logo col-3 offset-1">
      <h1
      @click="replacePage()"
      >boolflix</h1>
    </div>

    <div class="box-search col-3 offset-4 d-flex justify-content-evenly">
      <input
      v-model.trim="strFilm"
      @keyup.enter="$emit('startSearch',{text:strFilm, type:'all'})" 
      type="text" placeholder="Cerca qui il tuo film...">
      <button
      @click="$emit('startSearch',{text:strFilm, type:'all'})"
      class="btn btn-outline-danger">Cerca</button>
    </div>
  </header>
</template>

<script>
export default {
 name:'HeaderComp',

 data(){
   return{
     strFilm:'',
   }
 },
 methods:{
   replacePage(){
     location.replace('http://localhost:8080/')
   } 
 }
}
</script>

<style lang="scss" scoped>
header{
  height: 80px;
  border-bottom: 2px solid #EC0000;
  .logo{
    h1{
      color: #EC0000;
      text-transform: uppercase;
      margin:0;
      cursor: pointer;
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