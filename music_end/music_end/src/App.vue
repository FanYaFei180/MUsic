<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Homepage></Homepage> -->
  </div>
</template>

<script>
import Rem from '../static/js/utils.js';
// import Foor from './components/foot';
import Homepage from './components/homepage/homepage.vue';

export default {
  name: 'App',
  mounted(){
    Rem.obj();
    window.onresize=Rem.obj;
  },
  components:{
    // Foor,
Homepage
  }
  
}
</script>

<style>
@import "../static/css/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
