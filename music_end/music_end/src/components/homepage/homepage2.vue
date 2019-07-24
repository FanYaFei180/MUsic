<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="homepage1">
          <div class="homepage1-inner">
            <p>带</p>
            <p>你</p>
            <p>聆</p>
            <p>听</p>
            <p>你</p>
            <p>的</p>
            <p>内</p>
            <p>心</p>
            <p>声</p>
            <p>音</p>
          </div>
          <div class="snowMask"></div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="homepage1">
          <div class="homepage1-inner">
            <p>带</p>
            <p>你</p>
            <p>寻</p>
            <p>找</p>
            <p>你</p>
            <p>的</p>
            <p>感</p>
            <p>动</p>
            <p>瞬</p>
            <p>间</p>
          </div>
          <div class="snowMask"></div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="homepage1">
          <div class="homepage1-inner">
            <p>带</p>
            <p>你</p>
            <p>去</p>
            <p>感</p>
            <p>受</p>
            <p>人</p>
            <p>间</p>
            <p>的</p>
            <p>真</p>
            <p>情</p>
          </div>
          <div class="snowMask"></div>
          <div class="homepage1-enter"><router-link to="/login">点击进入</router-link></div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {

    }
  },
  mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        // effect : 'flip',
        pagination:{
          el:".swiper-pagination"
        }
      })
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
   @r:100rem;
    body,html{
      width: 100%;
      height: 100%;
    }
    .homepage1{
      width: 100%;
      height: 1334/2/@r;
      background: url('./img/snowflake2.png'),;
      background-size: 100% 100%;
      .homepage1-inner{
        padding-top: 224/2/@r;
        p{
          height: 50/2/@r;
          font-size: 50/2/@r;
          text-align: center;
          margin-top: 8/2/@r;
          color:#fff;
        }
      }
      @keyframes snowmask {
        0%{
          background-position: 0 0 ,0 0;
        }
        100%{
          background-position:720/@r 480/@r, 1440/@r 960/@r;
        }
      }
      .snowMask{
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        background: url('./img/snow1.png'),url('./img/snow2.png');
        animation: 10s snowmask linear infinite;
        pointer-events: none;
      }
    }
    .swiper-slide:nth-child(2) .homepage1{
      background: url('./img/snowflake3.png');
      background-size: 100% 100%;
    } 
    .swiper-slide:nth-child(3) .homepage1{
      background: url('./img/snowflake4.png');
      background-size: 100% 100%;
    } 
    .swiper-slide:nth-child(3) .homepage1 .homepage1-enter{
      margin: 0 auto;
      width: 250/2/@r;
      height: 90/2/@r;
      border: 2px solid #fff;
      border-radius: 50/2/@r;
      margin-top: 210/2/@r;
      color: #fff;
      font-size: 50/2/@r;
      text-align: center;
      line-height: 90/2/@r;
      a{
        color:#fff;
      }
    }
</style>


