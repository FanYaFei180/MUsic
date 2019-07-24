<template>
  <div class="out">
    <p>
      <span @click="fanhui"></span>你好旧时光
      <span></span>
    </p>
    <p>DP/CC</p>
    <p>
      <span>专辑</span>
      <span>无损</span>
      <span>音效</span>
    </p>

    <div class="swiper-container audio">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./imge/R)6$W3O))PQER3LN1LEB_BF.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="./imge/top-picture-02.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="./imge/top-picture-03.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="./imge/R)6$W3O))PQER3LN1LEB_BF.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="./imge/top-picture-02.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="./imge/top-picture-03.png" alt>
        </div>
      </div>
    </div>
    <ul>
      <li @click="like" class="like"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <div class="plan">
      <span>{{pass}}</span>

      <div class="bar" @click="bar">
        <div class="bar_over"></div>

        <span></span>
      </div>

      <span>{{all}}</span>

      <audio ref="aud">
        <source type="audio/ogg">
        <source src="./mp3/song.mp3" type="audio/mpeg">
      </audio>
    </div>
    <div class="play">
      <img src="./imge/top-picture-10.png" alt>
      <img @click="paly" :src="url" alt class="play_play">
      <img src="./imge/top-picture-12.png" alt>
    </div>
  </div>
</template>

<script src="../../static/js/jquery-3.3.0.js"></script>
<script>
export default {
  data() {
    return {
      isplay: false,
      pass: "00:00",
      all: "",
      url: require("./imge/top-picture-14.png")
    };
  },
  methods: {
    like() {
      let like = document.getElementsByClassName("like")[0];
      if (!like.classList.contains("likee")) {
        like.classList.add("likee");
      } else {
        like.classList.remove("likee");
      }
    },
    paly() {
      this.isplay = !this.isplay;
      let audio = document.querySelector("audio");
      // let  = document.getElementsByClassName('play_play')[0];
      console.log(audio.duration, audio.currentTime);
      if (this.isplay) {
        audio.play();
        this.url = require("./imge/top-picture-11.png");
      } else {
        this.url = require("./imge/top-picture-14.png");
        audio.pause();
      }
      audio.addEventListener("timeupdate", () => {
        var all = audio.duration; //总时间
        var pass = audio.currentTime; //已播时间
        let m = Math.floor(pass / 60);
        m < 10 ? (m = "0" + m) : m;
        let s = Math.floor(pass % 60);
        s < 10 ? (s = "0" + s) : s;
        this.pass = m + ":" + s;
        // console.log(s);
        let width = (pass / all) * 100 + "%";
        let bar_over = document.querySelector(".bar_over");
        // bar_over.style.width = width;
      });
    },
    bar(el) {
      let audio = document.querySelector("audio");
      var all = audio.duration; //总时间
      let bar = document.querySelector(".bar");
      let bar_over = document.querySelector(".bar_over");
      let width = el.offsetX / bar.offsetWidth;
      bar_over.style.width = width * 100+ "%";
      var pass = all *width;
      audio.currentTime  = pass;



    },
    fanhui(){
      this.$router.push('./home');
    }
  },
  components: {},
  mounted() {
    var mySwiper = new Swiper(".audio", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      slidesPerView: 2,
      slidesOffsetBefore: 60,
      spaceBetween: -80
    });
    setTimeout(() => {
      var audio = document.querySelector("audio");
      var all = audio.duration; //总时间
      let m = Math.floor(all / 60);
      m < 9 ? (m = "0" + m) : m;
      let s = Math.floor(all % 60);
      s < 9 ? (s = "0" + s) : s;
      this.all = m + ":" + s;
    }, 1000);
  }
};

function time() {
  let pass = audio.currentTime;
}
// var audio = document.querySelector("audio");
</script>

<style scoped>
.out {
  width: 100%;
  height: 13.3rem;
  background: url('./imge/bfbij.jpg') center center;
  background-size: cover;
}
.out > p {
  color: rgb(2, 89, 85);
  text-align: center;
}
.out > p:first-child {
  font-size: 0.32rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0;
}
.out > p:first-child > span {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
}
.out > p:first-child > span:first-child {
  background: url("./imge/back.png");
  background-size: cover;
}
.out > p:first-child > span:last-child {
  background: url("./imge/fx.png");
  background-size: cover;
}
.out > p:nth-child(2) {
  margin-top: 0.1rem;
  font-size: 0.24rem;
  line-height: 0.24rem;
}
.out > p:nth-child(3) {
  margin-top: 0.2rem;
  font-size: 0.2rem;
}
.out > p:nth-child(3) span {
  margin: 0 0.1rem;
  display: inline-block;
  line-height: 0.2rem;
  padding: 0.05rem 0.05rem;
  border: 1px solid rgb(2, 89, 85);
  border-radius: 0.14rem;
}
.swiper-container {
  margin-top: 0.48rem;
}
.swiper-container > div {
  float: right;
}
.swiper-slide > img {
  width: 5.16rem;
  height: 6.43rem;
}
.out > ul {
  margin-top: 1.06rem;
  display: flex;
  justify-content: space-around;
}
.out > ul > li {
  height: 0.44rem;
  width: 0.44rem;
  background-size: cover;
}
.like {
  background: url("./imge/top-picture-04.png");
  background-size: cover;
}
.likee {
  background: url("./imge/top-picture-05.png");
}
.out > ul > li:nth-child(2) {
  background: url("./imge/top-picture-06.png");
  background-size: cover;
}
.out > ul > li:nth-child(3) {
  background: url("./imge/top-picture-07.png");
  background-size: cover;
}
.out > ul > li:last-child {
  background: url("./imge/top-picture-08.png");
  background-size: cover;
}
.plan {
  color: rgb(2, 89, 85);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.36rem;
  font-size: 0.14rem;
  /* display: flex; */
}
.plan>span{
  font-size: .16rem;
}
.bar {
  width: 5.6rem;
  height: 3px;
  display: inline-block;
  margin: 0 0.2rem;
  background-color: #ccc;
  display: flex;
  justify-content: left;
  align-items: center;
}
.bar > div {
  background-color: rgb(2, 89, 85);
  width: 0%;
  height: 100%;
}
.bar > span {
  width: 0.16rem;
  height: 0.16rem;
  background-color: #fff;
  border: 0.04rem solid rgb(2, 89, 85);
  border-radius: 50%;
  box-sizing: border-box;
}

.play {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.play > img:nth-child(2) {
  margin: 0 1rem;
  width: 1rem;
  height: 1rem;
}
.play > img:first-child,
.play > img:last-child {
  width: 0.41rem;
  height: 0.37rem;
}
</style>
