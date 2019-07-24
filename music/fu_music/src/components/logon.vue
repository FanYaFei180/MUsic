<template>
  <div class="out">
    <img src="./img/ios-线框图标---副本111.gif" alt>
    <form action>
      <div>
        <span></span>
        <input type="text" placeholder="请输入账号" class="name">
      </div>
      <div>
        <span></span>
        <input type="password" placeholder="请输入密码" ch>
      </div>
      <div @click="add">登录</div>
    </form>
    <div>
      <span>注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span class="shu"></span>
      <span>忘记密码?</span>
    </div>
    <p>使用以下账号登录</p>

    <ul>
      <li>
        <img src="./img/QQ2@2x.png" alt>
      </li>
      <li>
        <img src="./img/weibo 3@2x.png" alt>
      </li>
      <li>
        <img src="./img/weixin 4@2x.png" alt>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    add(){
      this.$router.push('/mine');
    }
  },
  components: {}
};
</script>

<style scoped>
.out {
  width: 100%;
  height: 13.3rem;
  background: url(../components/img/登录.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.out > img {
  width: 2rem;
}
input {
  color: #fff;
  background: none;
  outline: none;
  border: none;
  box-shadow: none;
}
input::-webkit-input-placeholder {
  color: #fff;
}
form {
  margin-top: 0.8rem;
}
form > div {
  border-radius: 0.5rem;
  width: 5.7rem;
  height: 0.88rem;
  line-height: 0.88rem;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
  padding: 0 0.3rem;
}
form > div > span {
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.32rem;
}
form > div:nth-child(1) > span {
  background: url("./img/Login_button_icon_me@2x.png");
  background-size: contain;
}
form > div:nth-child(2) > span {
  background: url("./img/Login_button_icon_pass@2x.png");
  background-size: contain;
}
form > div:last-child {
  justify-content: center;
  height: 0.78rem;
  width: 5.7rem;
  font-size: 0.32rem;
  color: #ffffff;
  line-height: 0.78rem;
  background-color: rgb(2, 89, 85);
}
.out > div {
  width: 5.7rem;
  font-size: 0.24rem;
  padding: 0 0.3rem;
  text-align: center;
  /*justify-content: space-between;*/
  color: #ffffff;
}
.out > div > span:first-child {
  float: left;
}
.out > div > span:last-child {
  float: right;
}
.shu {
  display: inline-block;
  width: 1px;
  height: 0.4rem;
  background: #d1e4eb;
}
.out > p {
  font-size: 0.24rem;
  margin-top: 1.48rem;
}
ul {
  margin-top: 0.72rem;
  display: flex;
}
ul > li {
  margin: 0 0.36rem;
}
ul > li > img {
  width: 1rem;
}
</style>
