<template>
  <div>
    <Navigation :msg="list"></Navigation>
    <ul class="list">
      <li>
        <div class="Story">
          <span class="span">故事</span>
          <p>人与人之间为什么会疏远</p>
        </div>
        <div class="love">
          <span class="span">恋爱</span>
          <p>
            如果可以选择失忆
            <br>是不是就不会怎么心痛
          </p>
        </div>
        <div class="Cure">
          <span class="span">治愈</span>
          <p>
            一辈子最开心的活法
            <br>只要记住俩句话
          </p>
          <div class="imgs">
            <img src="./img-station/icon-play.png" alt>
            <span>131万</span>
          </div>
        </div>

        <div class="City">
          <span class="span">城市</span>
          <p>
            游离于城市的痛痒
            <br>错过了心爱的姑娘
          </p>
          <div class="imgs">
            <img src="./img-station/icon-play.png" alt>
            <span>131万</span>
          </div>
        </div>
        <div class="Psychology">
          <span class="span">心理</span>
          <p>
            为什么好人总是吃亏
          </p>
          <div class="imgs">
            <img src="./img-station/icon-play.png" alt>
            <span>131万</span>
          </div>
        </div>
        <div class="Family">
          <span class="span">家庭</span>
          <p>
            世上所有的爱都是团聚
            <br>唯有父母的爱指向别离
          </p>
          <div class="imgs">
            <img src="./img-station/icon-play.png" alt>
            <span>131万</span>
          </div>
        </div>
        <div class="doubts">
          <span class="span">解惑</span>
          <p>
            曾经我们亲密无间
            <br>现在我们相顾无言
          </p>
          <div class="imgs">
            <img src="./img-station/icon-play.png" alt>
            <span>131万</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Navigation from "../../../components/Navigation.vue";
export default {
  data() {
    return {
      list: [
        { img1: require("./img-station/icon-back.png") },
        { name: "电台" },
        { img2: require("./img-station/icon-share.png") },
        { to1: "/home" },
        { to2: "/home" },
        { to3: "/home" },
        { show: false }
      ]
    };
  },
  methods: {},
  props: ["msg"],
  components: {
    Navigation
  }
};
</script>

<style scoped lang="less">
@r: 100rem;
.list {
  width: 100%;
  .Story {
    width: 686/2 / @r;
    height: 382/2 / @r;
    background: url("./img-station/pic-1.png") no-repeat center center;
    border-radius: 0.1rem;
    overflow: hidden;
    background-size: cover;
    margin: 24/2 / @r auto 0rem;
    position: relative;
    p {
      width: 100%;
      font-size: 36/2 / @r;
      color: rgb(254, 254, 254);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
  .span {
    font-size: 130/2 / @r;
    color: rgba(254, 254, 254, 0.3);
    position: absolute;
    top: -0.1rem;
    left: 0;
  }
  .love,
  .Cure,
  .City,
  .Family,
  .doubts ,
  .Psychology{
    width: 686/2 / @r;
    height: 382/2 / @r;
    background: url("./img-station/pic-2.png") no-repeat center center;
    border-radius: 0.1rem;
    overflow: hidden;
    background-size: cover;
    margin: 24/2 / @r auto 0rem;
    position: relative;
    p {
      width: 100%;
      font-size: 36/2 / @r;
      color: rgb(254, 254, 254);
      position: absolute;
      top: 144/2 / @r;
      left: 164/2 / @r;
      line-height: 0.28rem;
    }
    .imgs {
      font-size: 0.12rem;
      position: absolute;
      top: .04rem;
      right: .08rem;
      display: flex;
      align-items: center;
      img {
        width: 0.12rem;
        height: 0.12rem;
      }
      span {
        color: #fff;
        margin-left: .03rem; 
      }
    }
  }
  .Cure {
    background: url("./img-station/pic-3.png") no-repeat center center;
  }
  .City {
    background: url("./img-station/pic-4.png") no-repeat center center;
  }
  .Psychology {
    background: url("./img-station/pic-5.png") no-repeat center center;
  }
  .Family {
    background: url("./img-station/pic-6.png") no-repeat center center;
  }
  .doubts {
    background: url("./img-station/pic-7.png") no-repeat center center;
  }
}
</style>
