<template>
  <div class="main">
    <div class="tou">
      <router-link to='/home'><img class="img1" src="./img/icon-01@2x.png"></router-link><span>听歌识曲</span><img class="img2" src="./img/icon-02@2x.png"><img class="img3" src="./img/icon-03@2x.png">
    </div>
    <div class="zhong">
      <div class="box_l">
        <img src="./img/icon-04@2x.png"><span>听歌识曲</span>
      </div>
      <div class="box_r">
        <img src="./img/icon-05@2x.png"><span>哼唱识曲</span>
      </div>
    </div>


<div class="box">
    <div class="cir1"></div>
    <div class="cir2"></div>
    <div class="logo">
      <img src="./img/picture-01@2x.png">
    </div>
  </div>
    <div class="foot">
      <p class="p1">正在识别音乐...({{num}}s)</p>
      <p @click="stop" class="p2">点击停止识别</p>
    </div>
  </div>
  
</template>

<script>
var time;
export default {
  data() {
    return {
      num:0,
      timer:null
    }
  },
  methods: {
      stop(){
        let p1=document.getElementsByClassName('p1')[0];
        clearTimeout(time);
        this.timer=null;
        p1.innerHTML='你已停止'
      }
  },
  components: {

  },
  mounted(){
    if(this.timer==null){
     this.timer=setInterval(() => {
        this.num++;
        
      if(this.num>5){
        // alert('时间太长了,重新听一次把');
        this.timer=null;
        clearInterval(this.timer);
        // this.num=0;
        return;
      }else{
          return
        }
      }, 1000);
    }
    // setTimeout(()=>{
    //   this.num++;
    //   if(this.num>5){
    //     alert('时间太长了,重新听一次把');
    //     this.num=0;
    //     return;
    //   }
    // },1000)
  }
}
</script>

<style scoped lang='less'>
body{
  margin: 0;padding: 0;
}
body,html{
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;
  height: 100%;
  background: url('../router/img/bg.png')no-repeat center center;
    background-size: 100% 100%;
}
.tou{
  
  padding: .4rem;
  display: flex;
  flex-direction: row;
  font-size: .36rem;
  align-items: center;
  justify-content: center;
  img{
    width: .64rem;
    height: .64rem;
  }
  span{
    margin-left: .4rem
  }
  .img1{
    position: relative;
    left: -1.5rem;
  }
  .img2{
    position: relative;
    right: -1.2rem;
  }
  .img3{
    position: relative;
    right: -1.5rem;
  }
}
.zhong{
  margin-top: .4rem;
  display: flex;
  flex-direction: row;
  font-size: .44rem;
  justify-content: center;
  img{
    width: .64rem;
    height: .64rem;
  }
  .img1{
    height: .4rem;
  }
  span{
    margin-left: .4rem;
  }
  .box_l{
    flex: .5;
    display: flex;
    color: rgb(2, 89, 85);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  span{
    padding: .36rem 0;
    border-bottom: 4px solid #663598;
  }
  }
  .box_r{
  align-items: center;
    color: rgb(153, 153, 153);
  justify-content: center;
    flex: .5;    
    display: flex;
  flex-direction: row;
  }
}
.logo{
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
.foot{
  margin-top: 2rem;
  .p1{
    font-size: .3rem;
    text-align:center;
  }
  .p2{
    margin-top: .4rem;
    font-size: .28rem;
    color:rgb(153, 153, 153);
    text-align:center;
    padding-bottom: .4rem;

  }
}




.box{
      margin: 100px auto;
      width: 100px;
      position: relative;
      height: 100px;
    }
    .logo{
      height: 100px;
      width: 100px;
      border-radius: 50px;
      // background: blue;
      color: white;
      line-height: 100px;
      text-align: center;
      font-size: 30px;
      position: absolute;
      top:-3rem;
    }
    .cir1,.cir2{
      height: 100px;
      width: 100px;
      border-radius: 50px;
      // border: 1px solid red;
      background: rgb(2, 89, 85);
    }
    .cir1{
      animation: big 3s 0s infinite;
    }
    .cir2{
      animation: big 3s .5s infinite;
    }
    .btn,.cir1,.cir2{
      position: absolute;
      top: 0;
      left: 0;
    }
    @keyframes big{
      form{
        /* width: 100px;
        height: 100px; */
        transform: scale(1)
      }
      to{
        /* width: 500px;
        height: 500px; */
        transform: scale(2);
        opacity: 0;
      }
    }
</style>
