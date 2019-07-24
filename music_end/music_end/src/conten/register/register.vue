<template>
    <div>
        <div class="logo">
          <img src="./img/photo-1.png" alt="出错了">
        </div>
      <div class="text">
        <router-link to="/Login">
          注册
        </router-link>
        <router-link to="/" class="c-red">
          登录
        </router-link>
      </div>
        <div class="input">
          <p><span></span><input type="text"  v-model="user"  placeholder="请输入用户名"></p>
          <p><span></span><input type="password"  v-model="password"  placeholder="请输入密码"></p>
          <p>忘记密码</p>
          <p><button @click="reg()">登录</button></p>
          <p><i></i><span>第三方登陆</span><i></i></p>
        </div>
        <ul class="img-list">
          <li>
            <router-link to="/a">
              <img src="./img/icon-qq.png" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/a">
              <img src="./img/icon-wei.png" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/a">
              <img src="./img/icon-xinlang.png" alt="">
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
  import Axios from "../../../node_modules/axios/dist/axios.js";
  export default {
      data() {
            return {
              user:"",
              password:"",
            }
        },
        methods: {
        reg(){
          Axios.get('https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5',
            {  params:{
                phone:this.user,
                passwd:this.password,
                dataType:"json",
              }
            }
          )
            .then(function(response){
              console.log(response);
              if (response.data.code===200) {
                alert("登陆成功");
                setTimeout(function () {
                  window.location.href="http://localhost:8082/#/mine";
                },1000)
              }else {
                alert("用户或密码错误");
              }
            })
            .catch(function(err){
              console.log(err);
            });

        }
        },
        components: {}
    }
</script>

<style scoped lang="less">
  @r:100rem;
  .logo{
    margin-top: 145/2/@r;
    text-align: center;
    img{
      width:200/2/@r;
      height:200/2/@r;
    }
  }
  .text{
    margin-top: 80/2/@r;
    padding: 0 15/@r;
    a{
      font-size: 36/2/@r;
      color: #666666;
      display: inline-block;
      width:50%;
      text-align: center;
      font-weight:600;
    }
  }
  .input{
    padding: 0 15/@r;
    margin-top:80/2/@r;
    & p:nth-child(1),& p:nth-child(2){
      height:55/2/@r;
      border-bottom: 1/@r #dcdddf solid;
      overflow: hidden;
      span{
        display: inline-block;
        width:44/2/@r;
        height:44/2/@r;
        float: left;
      }
      input{
        float: left;
        width: 625/2/@r;
        height:44/2/@r;
        border: none;
        outline: none;
       text-indent:10/@r;
      }
      input::-webkit-input-placeholder {
        font-size: 14/@r;
      }
    }
    & p:nth-child(1){
      span{
        background: url("img/icon-land.png") no-repeat center center;
        background-size:44/2/@r 44/2/@r;
      }
    }
    & p:nth-child(2){
      margin-top: 77/2/@r;
      span{
        background: url("img/lock.png") no-repeat center center;
        background-size:44/2/@r 44/2/@r;
      }
      input{
        background: url("img/icon-password.png") no-repeat center right;
        background-size:44/2/@r 44/2/@r;
      }
    }
    & p:nth-child(3){
      color: #fe0b45;
      cursor: pointer;
      text-align: right;
      margin-top: 15/2/@r;
      font-size: 12/@r;
    }
    & p:nth-child(4){
      margin-top: 30/@r;
      button{
        width:100%;
        background: -webkit-linear-gradient(left, #ffab97 , #ff0a49);
        font-size: 36/2/@r;
        color: #fff;
        padding: 20/2/@r 0;
        border: none;
        outline: none;
        border-radius: 25/@r;
      }
    }
    & p:nth-child(5){
      margin-top: 78/2/@r;
      font-size: 26/2/@r;
      overflow: hidden;
      span{
        display: inline-block;
        width:269/2/@r;
        text-align:center;
        float: left;
      }
      i{
        float: left;
        display: inline-block;
        width:206/2/@r;
        border-top: 1/@r solid #fb4e65;
        margin-top:17/2/@r;
      }
    }
  }
  .img-list{
    margin-top:78/2/@r;
    display: flex;
    li{
      flex: 1;
      text-align: center;
      img{
        width:98/2/@r;
        height:98/2/@r;
      }
    }
  }
  .router-link-active{
    color:#fb4e65 !important;
  }
</style>
