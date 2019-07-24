<template>
  <div class="header">
  
    <router-link to='/home'>
    <span class="arrow">
      <img src="./fn_images/top-picture-01@2x.png">
    </span>
    </router-link>
      <span class="he_btn header_f"><router-link to="/focus">关注</router-link></span>
    
    
      <span class="he_btn header_n"><router-link to="/nearby">附近  </router-link></span>
  
    <span class="add">
      <img src="./fn_images/top-picture-02@2x.png">
    </span>
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
.header {
  font-size: 0.28rem;
  color: rgb(51, 51, 51);
  padding: 0.3rem 0.32rem;
  overflow: hidden;
  .router-link-active{
     display: flex;
    justify-content:center;
    align-items: center;
     width: 1rem;
    height: 0.48rem;
    border-radius: 0.2rem;
    background-color: #025955;
    color: rgb(255, 255, 255);
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.48rem;
    img {
      width: 0.44rem;
      height: 0.44rem;
    }
  }
  .arrow {
    float: left;
  }
  .add {
    float: right;
  }
  .he_btn {
    display: flex;
    justify-content:center;
    align-items: center;
    width: 1rem;
    height: 0.48rem;
    border-radius: 0.2rem;
    background-color: transparent;
    color: rgb(51, 51, 51);
    float: left;
  }

  .header_f {
    margin-left: 1.6rem;
  }
  .header_n {
    margin-left: 0.5rem;
  }
}
</style>
