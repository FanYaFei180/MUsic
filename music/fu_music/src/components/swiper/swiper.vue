<template>
 <div class="swiper-container">
  <div class="swiper-wrapper">
      <div class="swiper-slide"> <img src="./image/banner-p-1@2x.png" alt=""></div>
      <div class="swiper-slide"> <img src="./image/banner-p-1@2x.png" alt=""></div>
      <div class="swiper-slide"> <img src="./image/banner-p-1@2x.png" alt=""></div>
  </div>
</div>
</template>
<script>
import Swiper from 'swiper';
window.Swiper = Swiper;
  export default {
    data () {
      return {
        
      }
    },
    mounted() {
        new Swiper('.swiper-container',{
         autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: true
})


    }
  }
</script>
<style lang="less" scoped>
  .swiper-container{
    height: 4.15rem !important;
    margin-top: .1rem;
    img{
      width: 100%;
    }
  }
</style>
