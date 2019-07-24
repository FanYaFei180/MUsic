<template>
  <div class="sidebar">
    <div class="side_left" >
      <!-- 头部 -->
      <div class="side_top">
        <img src="./img/head-picture-01@2x.png" alt>
        <div class="user">
          <p>王小谜</p>
          <span>VIP</span>
        </div>
      </div>
      <!-- 用户信息 -->
      <ul class="user_nav">
        <li>
          <span>粉丝</span>
          <span>520</span>
        </li>
        <li>
          <span>关注</span>
          <span>16</span>
        </li>
        <li>
          <span>动态</span>
          <span>148</span>
        </li>
      </ul>
      <!-- 用户详细列表 -->
      <ul class="user_list">
        <li><img src="./img/icon-01@2x.png" alt=""><span>消息中心</span></li>
        <li><img src="./img/icon-02@2x.png" alt=""><span>我的好友</span></li>
        <li><img src="./img/icon-03@2x.png" alt=""><span>会员中心</span></li>
        <li><img src="./img/icon-04@2x.png" alt=""><span>定时关闭</span></li>

        <li><img src="./img/icon-05@2x.png" alt="">
        <router-link to='/music'>
         <span>听歌识曲</span>
        </router-link>
       </li>

        <li class="wifi"><img src="./img/icon-06@2x.png" alt=""><span>仅wifi联网</span>
             <div class="button">
               <i :class="{b_active:bt_show}" @click="bt_show=!bt_show"></i></div>
        </li>
        <li class="notice"><img src="./img/icon-07@2x.png" alt=""><span>通知栏歌词</span>
         <div class="button">
               <i :class="{b_active:btt_show}" @click="btt_show=!btt_show"></i></div>
               </li>
        <li><img src="./img/icon-08@2x.png" alt=""><span>加入音乐人</span></li>
        <li><img src="./img/icon-09@2x.png" alt=""><span>定时播放</span></li>
        <li><img src="./img/icon-10@2x.png" alt=""><span>扫一扫</span></li>
        <li><img src="./img/icon-11@2x.png" alt=""><span>设置</span></li>
      </ul>
    </div>
    <div class="side_right" @click="s_show=false" v-show='s_show'></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s_show:true,
      bt_show:false,
      btt_show:false,
    };
  },
  props: ['msg'],
  methods: {
    
  },
  watch: {
    msg(){
      let bian=document.querySelector(".sidebar");
      if(this.msg){
        bian.style.transform=`translateX(0)`;
      }else{
        bian.style.transform=`translateX(-100%)`;
      }
      // this.$emit=("add",this.msg)
    }
  },
  mounted () {
    touch.on(document.documentElement, 'swipeleft', ()=>{
      let bian=document.querySelector(".sidebar");
      bian.style.transform=`translateX(-100%)`;
    });
  },
  components: {
  
  }
};
</script>

<style scoped lang="less">

.sidebar {
   transform: translateX(-100%);
  transition: all 400ms linear ;
  position: absolute;
  top: 0;
  z-index: 9999;
 height:100%; 
  display: flex;
  flex: row;
  // width:100%;
  .side_right {
    width: 0.9rem;
    // background: rgba(0, 0, 0, 0.3);
    height:14rem;
  }
  .side_left {
      width: 6.6rem;
      background: url('./img/side_bj.png') no-repeat center center;
      background-size:100% 100%;
      height:14rem;
    // background: #eae5d1;
      float: left;
    // 头部
    .side_top {
      color: rgb(102, 102, 102);
      margin: 0.3rem 0 0 0.3rem;
      display: flex;
      flex-direction: row;
      img {
        width: 1rem;
        height: 1rem;
      }
      .user {
        margin-top: 0.13rem;
        margin-left: 0.3rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.28rem;
        }
        span {
          display: flex;
          width: 0.54rem;
          font-size: 0.22rem;
          height: 0.28rem;
          justify-content: center;
          align-items: center;
          border: 1px solid rgb(102, 102, 102);
          border-radius: 0.13rem;
          margin-top: 0.2rem;
        }
      }
    }
    .user_nav {
      font-size: 0.28rem;
      color: rgb(0, 0, 0);
      overflow: hidden;
      margin: .35rem .34rem 0 .3rem;
      li{
        display: flex;
        flex-direction: column;
        float: left;
        margin-left: 2rem;
        span:nth-child(1){
          font-size: .28rem;
        }
        span:nth-child(2){
          font-size: .34rem;
          color: rgb(2,89,85);
          margin-top: .3rem;
        }
      }
      li:first-child{
        margin-left: 0;
      }
    }
    .user_list{
      padding: .35rem .3rem .3rem .3rem;
      display: flex;
      flex-direction: column;
      li{
        overflow: hidden;
         padding-bottom: .53rem;
         display: flex;
         align-items: center;
        img{
          width: .4rem;
          height: .4rem;
          float: left;
        }
        span{
          font-size: .3rem;
          float: left;
          margin-left: .4rem;
        }
       
      }
    
        .wifi{
          position: relative;
      }
        .notice{
           position: relative;
        }
      }
    }
      .button{
          width: .54rem;
          height: .3rem;
          border:1px solid #025955;
          border-radius: .15rem;
          background: #025955;
          position: absolute;
          right:.3rem;
       i{
          display:block;
          width: .26rem;
          height: .26rem;
          border-radius: 50%;
          background: #fff;
          margin-left:0;
       }
       .b_active{
         margin-left: .25rem;
         display:block;
          width: .26rem;
          height: .26rem;
          border-radius: 50%;
          background: #fff;
    
       }
       }
    //点击加类
       
  }
  

  .ww{
  transform: translateX(0);
}  
.yy{
}
</style>
