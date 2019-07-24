<template>
  <div class="focus">
    <!-- <div class="focus_bj">
      <img src="../../../../static/fn_images/focus.jpg" alt="">
    </div>-->
    <Fnheader></Fnheader>
    <!-- 轮播 data获取 打包 -->
    <div class="carousel">
      <h2>热门话题</h2>
     
        <swiper :options="swiperOption">
          <swiper-slide>
             <ul class="lunbo">
            <li class="hot_li" v-for="(item,index) in hot_list" :key="index">
              <img :src="item.img">
              <span>#{{item.text}}</span>
            </li>
                </ul>
          </swiper-slide>
        </swiper>
  
    </div>
    <!-- 分享列表 -->
    <ul class="share_list">
      <li v-for="(item,index) in share_list" :key="index">
        <!-- 分享人 -->
        <div class="share_head">
          <img v-bind="{src:item.h_pic}" class="header_pic">
          <div class="share_author">
            <p>
              {{item.name}}
              <span>{{item.text}}</span>
            </p>
            <span>{{item.num}}</span>
          </div>
          <span class="f_btn share_btn" @click="focus(item)">
            <i v-show="item.show">+关注</i>
            <i v-show="!item.show">✔已关</i>
          </span>
        </div>
        <!-- 分享详细内容 -->
        <div class="share_detail">
          <div class="text">
            <p>
              {{item.content}}
              <span>{{item.content_p}}</span>
            </p>
            <img v-bind="{src:item.c_pic}" class="big_pic">
          </div>

          <span class="share_bottom">
            <img v-bind:src="item.b_img">
            <span class="music_name">
              <p>{{item.content_p}}</p>
              <p>{{item.content_p2}}</p>
            </span>
          </span>
        </div>
      </li>
    </ul>
    <!-- 你可能感兴趣的人 -->
    <div class="interest">
      <h2>你可能感兴趣的人</h2>
      <ul class="inner">
        <li v-for="(item,index) in interest_list" :key="index">
          <img v-bind="{src:item.img}" alt>
          <span>{{item.name}}</span>
          <span class="f_btn" @click="focus(item)">
            <i v-show="item.show">+关注</i>
            <i v-show="!item.show">✔已关</i>
          </span>
        </li>
      </ul>
    </div>

    <!-- 尾部 -->
    <bofang></bofang>
  </div>
</template>

<script>
import Fnheader from "../Fnheader";
import bofang from "../../bofang/bofang";

export default {
  data() {
    return {
      // 轮播
      swiperOption: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true
      },
      // 分享列表
      share_list: [
        {
          h_pic: require("../fn_images/top-picture-05@2x.png"),
          name: "熊不偷蜜",
          text: "分享单曲：",
          num: "134万粉丝",
          content:
            "CC和QQ首次合作共同创作的一首蕴含特殊含义的歌曲。他们首次尝试西语曲风，以音乐之名，为爱发声。作为这首歌的创作着和演唱者在这里向全社会呼吁，关注青少儿童的心理健康问题",
          content_p: "人生可以不同",
          c_pic: require("../fn_images/top-picture-06.png"),
          content_p2: "CC/QQ",
          b_img: require("../fn_images/top-picture-07@2x.png"),
          show: true
        },
        {
          h_pic: require("../fn_images/top-picture-08@2x.png"),
          name: "熊不偷蜜",
          text: "分享单曲：",
          num: "134万粉丝",
          content:
            "令人惊艳的break空拍和舒服的换气，总能让人既惊喜又惊讶，整首歌表达了怀揣爱恋的男生热烈的心事。都说最怕rpper唱感情歌，此刻让我们跟随ICE的迷人声线，在充满夏日气息的LOVE里无尽地~ ",
          content_p: "FALL IN LOVE",
          c_pic: require("../fn_images/top-picture-09.png"),
          content_p2: "ICE",
          b_img: require("../fn_images/top-picture-10@2x.png"),
          show: true
        }
      ],
      // 兴趣爱好
      interest_list: [
        {
          img: require("../fn_images/top-picture-11.png"),
          name: "Tony Stark",
          show: true
        },
        {
          img: require("../fn_images/19.png"),
          name: "Spider Man",
          show: false
        }
      ],
      // 热门话题
      hot_list: [
        {
          img: require("../fn_images/top-picture-03.png"),
          text: "人文"
        },
        {
          img: require("../fn_images/top-picture-04.png"),
          text: "风景"
        },
        { img:require("../fn_images/005.png"), text: "情怀"}
      ]
    };
  },
  methods: {
    focus(item) {
      // console.log(item);
      item.show = !item.show;
    }
  },
  components: {
    Fnheader,
    bofang
  }
};
</script>

<style scoped lang="less">
.focus {
  font-size: 0.28rem;
  width: 100%;
  background: url("../fn_images/focus.jpg") no-repeat center center;
  background-size: 100% 100%;
  // 滑动图
  .carousel {
    margin-left: 0.32rem;
   
    h2 {
      padding: 0.2rem 0;
      text-align: left;
    }
    .lunbo {
      overflow: hidden;
      width: 6.86rem;
      // margin-left: .32rem;
      height: 1.36rem;
      li:nth-child(3) {
        width: 1.6rem;
        img {
          width: "1.62rem";
        }
      }
      li {
        width: 2.42rem;
        float: left;
        margin-left: 0.2rem;
        box-sizing: border-box;
        position: relative;
        img {
          width: 2.42rem;
          height: 1.36rem;
        }

        span {
          position: absolute;
          top: 0.27rem;
          left: 0.27rem;
          color: white;
          font-size: 0.25rem;
        }
      }
      li:first-child {
        margin-left: 0;
      }
    }
  }
  // 关注按键
  .f_btn {
    font-size: 0.2rem;
    width: 1rem;
    height: 0.48rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(2, 89, 85);
    color: rgb(255, 255, 255);
    border-radius: 0.2rem;
  }
  // 分享列表
  .share_list {
    font-size: 0.24rem;
    width: 100%;
    padding: 0.4rem 0.32rem 0 0.32rem;
    li {
      width: 100%;
      margin-bottom: 0.6rem;
      img:hover {
        animation: action 1s linear 0s 2;
      }
      .share_head {
        display: flex;
        justify-items: center;
        align-items: center;
        position: relative;
        .share_btn {
          position: absolute;
          right: 0.32rem;
        }
        .header_pic {
          width: 0.9rem;
          height: 0.9rem;
        }
        .share_author {
          margin-left: 0.2rem;
          text-align: left;
          p {
            padding-bottom: 0.1rem;
            color: rgb(2, 89, 85);
          }
          span {
            color: rgb(153, 153, 153);
            font-size: 0.2rem;
          }
        }
      }
      // 分享详情
      .share_detail {
        margin-top: 0.36rem;
        text-align: left;
        .text {
          margin-left: 0.9rem;
          font-size: 0.22rem;
          p {
            color: rgb(51, 51, 51);
            line-height: 0.35rem;
            span {
              color: #025955;
            }
          }
          .big_pic {
            width: 4rem;
            height: 4rem;
            margin-top: 0.22rem;
          }
        }
        .share_bottom {
          display: block;
          margin-top: 0.42rem;
          margin-left: 0.31rem;
          overflow: hidden;
          img {
            width: 0.8rem;
            height: 0.8rem;
            float: left;
          }
          img:hover {
            animation: action 1s linear 0s 2;
          }
          .music_name {
            float: left;
            margin-left: 0.24rem;
            p {
              line-height: 0.4rem;
            }
            p:nth-child(1) {
              color: #025955;
            }
            p:nth-child(2) {
              color: rgb(51, 51, 51);
            }
          }
        }
      }
    }
  }

  .interest {
    margin-left: 0.32rem;
    padding-bottom: 1.3rem;
    h2 {
      padding: 0.2rem 0;
      text-align: left;
    }
    .inner {
      overflow: hidden;
      li:first-child {
        margin-left: 0;
      }
      li {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 0.22rem;
        width: 3.32rem;
        height: 3.32rem;
        background: rgb(255, 255, 255);
        //  background: red;
        border-radius: 0.2rem;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
        span:first-child {
          font-size: 0.32rem;
          color: rgb(102, 102, 102);
        }
        span {
          margin-top: 0.26rem;
        }
      }
    }
  }
}
@keyframes action {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 0.9;
  }
  20% {
    opacity: 0.7;
  }
  30% {
    opacity: 0.65;
  }
  45% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.5;
  }
  65% {
    opacity: 0.65;
  }
  75% {
    opacity: 0.7;
  }
  80% {
    opacity: 0.75;
  }
  85% {
    opacity: 0.8;
  }
  95% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>
