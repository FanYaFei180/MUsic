<template>
  <div class="list">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../conten/home/img-home/icon-1.png" alt>
          <span>歌手</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home">
          <img src="../conten/home/img-home/icon-2.png" alt>
          <span>排行</span>
        </router-link>
      </li>
      <li>
        <router-link to="/station">
          <img src="../conten/home/img-home/icon-3.png" alt>
          <span>电台</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home/browse">
          <img src="../conten/home/img-home/icon-4.png" alt>
          <span>MV</span>
        </router-link>
      </li>
      <li>
        <router-link to="/album">
          <img src="../conten/home/img-home/icon-5.png" alt>
          <span>专辑</span>
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
.list {
  z-index: 100;
  width: 100%;
  ul {
    display: flex;
    li {
      flex: 1;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 22/2 / @r;

        img {
          width: 70/2 / @r;
          height: 70/2 / @r;
        }
        span {
          font-size: 24/2 / @r;
          color: #333333;
          margin: 17/2 / @r;
        }
      }
    }
  }
}
</style>
