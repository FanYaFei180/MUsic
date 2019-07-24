<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../conten/home/img-home/icon1-0.png" class="img">
          <img src="../conten/home/img-home/icon2-1.png" class="img">
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/video">
          <img src="../conten/home/img-home/icon2-0.png" class="img">
          <img src="../conten/home/img-home/icon2-2.png" class="img">
          <span>视频</span>
        </router-link>
      </li>
      <li>
        <router-link to="/audio">
          <img src="../conten/home/img-home/head-1.png" class="imgs">
        </router-link>
      </li>
      <li>
        <router-link to="/discover/find">
          <img src="../conten/home/img-home/icon3-0.png" class="img">
          <img src="../conten/home/img-home/icon3-2.png" class="img">
          <span>发现</span>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <img src="../conten/home/img-home/icon4-0.png" class="img">
          <img src="../conten/home/img-home/icon4-2.png" class="img">
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
@r: 100rem;

.footer {
  width: 100%;
  font-size: 0;
  position: fixed;
  bottom: 0;
  height: 98/2 / @r;
  border-top: 1px solid #ccc;
  background-color: #fff;
  ul {
    height: 98/2 / @r;
    display: flex;
    align-items: center;
    li {
        height: 100%;
      flex: 1;
      a {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img:nth-child(1) {
          display: block;
          width: 48/2 / @r;
          height: 48/2 / @r;
        }
        .img:nth-child(2) {
          display: none;
        }
        span {
          font-size: 0.12rem;
          color: #cecccd;
        }
        .imgs {
          width: 80/2 / @r;
          height: 80/2 / @r;
        }
        &.router-link-active {
          span {
            font-size: 0.12rem;
            color: #F5786E;
          }
          .img:nth-child(1) {
            display: none;
          }
          .img:nth-child(2) {
            display: block;
            width: 48/2 / @r;
            height: 48/2 / @r;
          }
        }
      }
    }
  }
}
</style>

