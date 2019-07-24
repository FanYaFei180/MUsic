<template>
  <div class="out">
    <div class="swiper-container intros">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./img/1.png" alt>
          <ul>
            <li class="one"></li>
            <li></li>
            <li></li>
          </ul>
          <div class="pass" @click="jup">跳过</div>
        </div>
        <div class="swiper-slide">
          <img src="./img/2.png" alt>
          <ul>
            <li></li>
            <li class="one"></li>
            <li></li>
          </ul>
          <div class="pass" @click="jup">跳过</div>
        </div>
        <div class="swiper-slide">
          <img src="./img/3.jpg" alt>
          <div class="fend" @click="jup">找到复音</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Rem from "../../static/js/rem";
import Logon from "./logon";
setInterval(Rem.setrem, 100);
export default {
  data() {
    return {};
  },
  methods: {
    jup() {
      this.$router.push("/logon");
    }
  },
  components: {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: false // 循环模式选项
    });
  }
};

window.onload = function() {
  var mySwiper = new Swiper(".swiper-container", {});
  document.ontouchmove = function() {
    if (mySwiper.isEnd) {
      alert("是");
    }
  };
};
</script>

<style scoped>
.pass {
  position: absolute;
  right: 0.38rem;
  top: 0.3rem;
  text-align: center;
  line-height: 0.48rem;
  font-size: 0.24rem;
  height: 0.48rem;
  width: 1.06rem;
  border-radius: 0.24rem;
  color: rgb(153, 153, 153);
  border: 1px solid rgb(153, 153, 153);
  z-index: 20;
}
.out {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-pagination span {
  margin: 0 0.34rem;
  width: 0.28rem;
  height: 0.28rem;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
  order: 0.08;
}
.swiper-slide > ul {
  position: absolute;
  width: 100%;
  transform: translate3d(0, -2.5rem, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide > ul > li {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  margin: 0 0.34rem;
}
.swiper-slide > ul > li.one {
  width: 0.28rem;
  height: 0.28rem;
  background-color: #fff;
  opacity: 0.8;
}
.fend {
  position: absolute;
  width: 2.3rem;
  height: 0.7rem;
  font-size: 0.32rem;
  background-color: #fff;
  border-radius: 0.35rem;
  color: rgd(51, 51, 51);
  left: 50%;
  transform: translate3d(-50%, -2.5rem, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
