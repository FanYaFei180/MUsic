<template>
  <div class="box">
      <audio ref="aud">
        <source  type="audio/ogg">
        <source src="./oudio/bg.mp3" type="audio/mpeg">        
      </audio>
      <div class="main">
          <!-- :class="{dong:!isshow}" -->
          <router-link to="/oudio"><img class="a"  src="./image/bottom-p-1@2x.png"></router-link>
          <p>{{msg}}</p>
          <div>
              <img v-if="isshow" @click="show"   src="./image/bottom-incon-01@2x.png" alt="">
              <img v-if="!isshow" @click="show"  src="./image/矢量智能对象@2x.png" alt="">
              <img src="./image/bottom-incon-02@2x.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isshow:true,
        msg:"Here I Am Bryan Adams",
        timer:null,
        count:0,
    }
  },
  methods: {
     show() {
         this.isshow=!this.isshow;
         if(this.isshow){
             document.querySelector("audio").pause();
         }else{
             document.querySelector("audio").play();
         }
        if(!this.isshow){
            if(this.timer==null){
                this.timer=setInterval(()=>{
                this.count+=10;
				let olld=this.msg.substring(0,1);
				let nes=this.msg.substring(1);
                    this.msg=nes+olld;
                $(".main>img").css({
                    "transform": `rotateZ(${this.count}deg)`
                })
                // console.log(this.count);
				},100);
			}
        }else{
            clearInterval(this.timer);
			this.timer=null;
        }

     }
  },
  mounted () {
    let bo=document.querySelector(".main");
    bo.onclick=function(){
        // this.$router.push('./oudio');
    }.bind(this)
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
@bottomc:rgb(2,89,85);
@mainc:rgb(99,149,138);
// @keyframes flash {
//     0%{
//         transform: rotateZ(0deg);
//     }
//     100%{
//         transform: rotateZ(360deg);
//     }
// }
// .dong{
//     animation: flash  linear 10s infinite ;
// }
    .box{
        margin-top: .98rem;
        position: fixed;
        width: 100%;
        background-color: #fff;
        bottom: 0;
        background-color: @bottomc;
        color: @mainc;
        height: .98rem;
        padding: 0 .32rem;
        .main{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: .29rem;
            line-height:.98rem;
            .a{
                position: absolute;
                bottom: .25rem;
                width: .9rem;
                z-index: 999;
            } 
            p{
                margin-left: 1.15rem;
            }
            div{
                // width: 1.20rem;
                display: flex;
                // flex-direction: row;
                justify-content: space-between;
                align-items: center;
                span{
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    color: #fff;
                }
                img{
                    width: .44rem;
                    &:nth-of-type(1){
                        margin-right: .2rem;
                    }
                    &:nth-of-type(2){
                        position: relative;
                    }
                }
            }
        }
    }
</style>

