<template>
  <div class="listening">
    <div class="listening-top">
        <router-link to="/home" class="fanhui"></router-link>
       <span class="tingge">听歌识曲  </span>
    </div>
    <div class="listening-middle">
        <div id="main-circle-one">
            <img src="./img/icon4@2x(4).png" @click="circleClick()">
        </div>
        <div class="water">
                <div class="point1" :class="{'point':acc}"></div>
                <div class="point2" :class="{'point':acc}"></div>
                <div class="point3" :class="{'point':acc}"></div>
                <div class="point4" :class="{'point':acc}"></div>
            </div>
    </div>
    <div class="listening-foot">
        <p @click="circleClick()" class="listening-foot-text">点击开始识别</p>
        <p>请确保你的手机靠近声音来源</p>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
        acc:false
    }
  },
  methods: {
      circleClick(){
         this.acc = !this.acc;
         var num = 20;
         var timer = null;
         if(timer!=null){
             return false;
         }
         timer = setInterval(()=>{
             num--;
             document.getElementsByClassName('listening-foot-text')[0].innerHTML = "正在识别音乐("+num+"s)";
             if(num<=0 || this.acc == false){
                 clearInterval(timer);
                 timer = null;
                 this.acc = false;
                 document.getElementsByClassName('listening-foot-text')[0].innerHTML = "点击开始识别";
             }
         },1000);
         
      }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
    @r:100rem;
    .listening-top{
        width: 100%;
        height: 88/2/@r;
        background: #ff8a86;
        font-size: 36/2/@r;
        color: #fdfcfc;
        text-align: center;
        line-height: 88/2/@r;
        overflow: hidden;
    }
    .listening-middle{
        height: 600/2/@r;
        background: #fff;
        #main-circle-one{
            background-color: rgba(252,15,26,.8);
            width: 200/2/@r;
            height: 200/2/@r;
            border-radius: 50%;
            cursor: pointer;
            z-index: 100;
            position: relative;
            transform: translate(275/2/@r,200/2/@r);
            img{
                width: 148/2/@r;
                height: 148/2/@r;
                border-radius: 50%;
                margin-left: 32/2/@r;
                margin-top: 32/2/@r;
                z-index: 100;
            }
        }
    }
    
    .listening-foot{
        p:nth-child(1){
            margin-top:30/@r; 
            text-align: center;
            font-size: 48/2/@r;
            color:#333; 
        }
        p:nth-child(2){
            text-align: center;
            font-size: 44/2/@r;
            color:#999; 
            margin-top: 10/2/@r;
        }
    }
       .water{
	width: 300/@r;
	height: 300/@r;
    position: absolute;
    left: .38rem;
    top: .45rem;
}
.water .point{
	position: absolute;
	border-radius: 50%;
	animation: border 2s linear infinite;
}
.water .point2{
	-webkit-animation-delay: 0.5s;
}
.water .point3{
	-webkit-animation-delay: 1s;
}
.water .point4{
	-webkit-animation-delay: 1.5s;
}
@keyframes border{
	from {
		width: 0;
		height: 0;
		top: 50%;
		left: 50%;
		background-color: rgba(235,51,36,1);
	}
	to {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(235,51,36,0);
	}
}
.fanhui{
    display: inline-block;
    width:44/@r;
    height:44/@r;
    background:url("img/icon-back.png") no-repeat center center;
    background-size:35/@r 35/@r;  
    float: left;
}
.tingge{
    margin-right:44/@r; 
}
</style>
