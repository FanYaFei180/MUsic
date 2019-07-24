<template>
  <div class="z_album">
    <header>
      <router-link to="/radio">
        <span class="back">
          <img src="./img/top-icon-01@2x.png" />
        </span>
      </router-link>
      <span class="z_text">专辑</span>
      <span class="set">
        <img src="./img/top-icon-02@2x.png" />
      </span>
    </header>
    <div class="zj">
      <div class="right">
        <img src="./img/picture-02@2x.png" />
        <img src="./img/picture-01@2x.png" />
      </div>
      <div class="left">
        <p>
          spirit-stallion
          <br />cimarron soundrack
        </p>
        <div>
          <img src="./img/head-picture-01@2x.png" />
          <img src="./img/head-picture-02@2x.png" />
        </div>
        <p class="j">简介：原始的美国西部，一个美丽的村庄</p>
      </div>
    </div>
    <div class="love">
      <p @click="add">
        <img src="./img/icon-03@2x.png" />
        <span>{{num}}</span>
      </p>
      <p @click="ly">
        <img src="./img/icon-04@2x.png" />
        <span class="dd">...</span>
        <span>{{num1}}</span>
      </p>
      <p>
        <img src="./img/icon-05@2x.png" />
        <span class="dd">...</span>
      </p>
    </div>
    <main class="main">
      <div>
        <img src="./img/icon-06@2x.png" class="img1" />
        <p>
          全部播放
          <span>（{{msg.length}}首）</span>
        </p>
        <img src="./img/icon-07@2x.png" class="img2" @click="audio" />
      </div>
      <ol>
        <li v-for="(item,index) in msg" :key="index" @click="bf(index)">
          <a herf="#">
            <p class="text">
              <span :class="{ys:item.active}">{{item.title}}</span>
              <img src="./img/icon-09@2x.png" />
              <img src="./img/icon-08@2x.png" v-show="item.active" />
            </p>
            <p class="dj">
              <span class="span">{{item.sq}}</span>
              <span class="span">{{item.dj}}</span>
              <span class="span1">{{item.ms}}</span>
            </p>
          </a>
        </li>
      </ol>
    </main>
  </div>
</template>

<script>
import Text from "./../../../static/json/album";
export default {
  data() {
    return {
      msg: Text.list,
      num: 2668,
      num1: 23
    };
  },
  methods: {
    bf(index) {
      for (let i in this.msg) {
        this.msg[i].active = false;
      }
      this.msg[index].active = true;
    },
    add() {
      let n = (this.num += 1);
      this.num = n;
    },
    ly() {
      alert("感谢亲的留言哟！");
      this.num1 = this.num1 += 1;
    },
    audio() {
      alert("添加成功！");
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
// @import './../../../static/css/common.css';
.z_album {
  //  头部
  width:100%;
  height: 100%;
  padding-left: 0.32rem;
  padding-right: 0.32rem;
  background: url("./img/banner.png") no-repeat center center;
  background-size:cover;
//   padding-bottom: 2rem;
   header{
          height:.77rem;
          text-align:center;
          overflow:hidden;
          padding-top:.3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .36rem;
          color: #000;
          img{
            width:.4rem;
            height:.4rem;
          }
        }
  
  .zj {
      margin-top: .5rem;
      display: flex;
      height: 2.5rem;
       justify-content: space-between;
    .right {
      position: relative;
      img:nth-child(1) {
        width: 2.5rem;
        height: 2.5rem;
        position: relative;
        left: 0.4rem;
        animation: bounce-in 0.8s ease infinite;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0.5);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(0.5);
        }
      }
      img:nth-child(2) {
        width: 2.12rem;
        height: 2.12rem;
        position: relative;
        top: -2.6rem;
        animation: bounce-in 0.8s ease infinite;
      }
    }
    .left {
      font-size: 0.36rem;
      width: 50%;
      color: rgb(51, 51, 51);
    //   margin-top: -0.5rem;
      p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        animation: bounce 0.5s ease 1;
      }
      .j {
        font-size: 0.28rem;
      }
      @keyframes late {
        0% {
          transform: translate(800px 800px);
        }
        100% {
          transform: translate(0px 0px);
        }
      }
      p:last-child {
        color: rgb(102, 102, 102);
      }
      div {
        img {
          width: 1rem;
          height: 1rem;
        }
        img:nth-child(2) {
          margin-left: -0.5rem;
          animation: bounce 3s linear infinite;
        }
        @keyframes bounce {
          0% {
            transform: rotate(-50deg);
          }
          18% {
            transform: rotate(-100deg);
          }
          35% {
            transform: rotate(-150deg);
          }
          55% {
            transform: rotate(-200deg);
          }
          70% {
            transform: rotate(-250deg);
          }
          85% {
            transform: rotate(-300deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      }
    }
  }
  .love {
    display: flex;
    justify-content: space-between;
    padding: 0 0 .6rem 0;
    // margin-top: -1rem;
    p {
      position: relative;
    //   height: .3rem;
      span {
        font-size: 0.2rem;
        color: rgb(102, 102, 102);
        position: relative;
        top: -0.1rem;
      }
      img {
        width: 0.44rem;
        height: 0.44rem;
      }
      .dd {
        font-size: 0.3rem;
        color: rgb(16, 97, 92);
        position: absolute;
        left: 0.08rem;
        top: 0.55rem;
      }
    }
  }
  .main {
    div {
      overflow: hidden;
    //   margin-top: -0.3rem;
      .img1 {
        float: left;
        width: 0.4rem;
        height: 0.4rem;
      }
      p {
        float: left;
        font-size: 0.32rem;
        color: rgb(51, 51, 51);
        margin-left: 0.24rem;
        margin-top: -0.05rem;
      }
      span {
        color: rgb(102, 102, 102);
      }
      .img2 {
        float: right;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
    ol {
      margin-top: 0.2rem;
      li {
        height: 100%;
        font-size: 0.32rem;
        color: rgb(16, 97, 92);
        // margin-top: -0.2rem;
        a {
          height: 100%;
          display: block;
          .text {
            font-size: 0.34rem;
            padding-top:.2rem;
            color: rgb(51, 51, 51);
            .ys {
              color: rgb(16, 97, 92);
            }
            img {
              width: 0.44rem;
              height: 0.44rem;
              float: right;
            }
          }

          .dj {
              display: flex;
              flex-direction: row;
                 padding-top:.2rem;
            // margin-top: -0.2rem;
            .span {
              display: inline-block;
              width: 0.7rem;
              height: 0.4rem;
              // line-height: 0.28rem;
              // text-align: center;
            display: flex;
            justify-content:center;
            align-items: center;
              border: 1px solid rgb(16, 97, 92);
              border-radius: 0.1rem;
              margin-right: 0.1rem;
              font-size: 0.2rem;
              color: rgb(16, 97, 92);
            }
            .span1 {
              font-size: 0.2rem;
              color: rgb(102, 102, 102);
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>