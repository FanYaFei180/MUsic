<template>
  <div class="section">
    <Navigation :msg="list"></Navigation>
    <router-view v-show="!list[8].sum"></router-view>
    <Home22 v-show="list[8].sum"></Home22>
    <Foor></Foor>
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import search from '../../conten/home/search/search.vue';
import Foor from '../../components/foot.vue';
import Swiper from "swiper";
import Home22 from './home22.vue'
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      list: [
        { img1: require("./img-home/icon-menu.png") },
        { img2: require("./img-home/icon-search.png") },
        { img2: require("./img-home/icon-ting.png") },
        { to1: "/sidebar" },
        { to2: "/home/search" },
        { to3: "/home" },
        { show: true },
        { num: "林俊杰 背对背拥抱" },
        { sum: true },
      ],
    };
  },
  methods: {
    
  },
  components: {
    Navigation,
    // browse,
    search,
    Foor,
    Home22
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },

};
</script>
