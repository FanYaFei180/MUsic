<template>
  <div id="app">
     <!-- <transition> -->
    <router-view/>
    <!-- </transition> -->
  </div>
</template>

<script>
import rem from './../static/js/rem.js';
export default {
  name: 'App',
    mounted(){
    rem.setrem();
    window.onresize = rem.setrem;
    }

}
</script>

<style>
@import './../static/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* box-sizing: content-box; */
}
/* 实现滑动效果 */
  /* .v-enter-active, .v-leave-active { transition: all 0.3s; }
  .v-enter, .v-leave-to { transform: translateX(100%); } */
</style>
