<template>
  <div class="recommend">
    <div class="div_img">
        <img src="./img/QQ图片20190627094159.png" alt="">
    </div>
    <div class="boss">
            <div class="folw">
                <div class="folw_div">

                    <img src="./img/图层 11@2x.png">
                </div>
                <div class="flow_div_span">
                    <span>成名在望</span>
                    <span>32粉丝</span>   
                    <img src="./img/矩形 17 拷贝@2x.png" class="flow_div_span_img2" @click="dn" v-show="show">
                    <img src="./img/矩形 16 拷贝 3@2x.png" class="flow_div_span_img" @click='dnn' v-show="!show">
                </div>
                
            </div>
            <div class="vidio">
                <p class="vidio_p">霸气</p>
                <div>
                    <video src="http://124.236.34.24/vcloud1049.tc.qq.com/1049_M2105262002KjvKg49doBB1001541735.f20.mp4?vkey=E82FC8975BFE9F3277DD40781EF6F74B434047609BEE9EE1A5CCFD01B8A90FAA48ADC98C5220FE37FE113F7E4394921F320A6312A8C1F20F63CE12E5B9553595D3D16EBA9961D8E6061D43AF77C5B98A69AE89118B560C20" preload="./img/but.png" controls='controls'></video>
                </div>
                <div class="vidio_p2">
                    <span class="vidio_p2_span">今天:21:20</span>
                    <img src="./img/矢量智能对象 拷贝 2@2x.png">
                    <span>1314</span>
                    <div class="cli" @click='fn'>
                        <span class="op">
                            <img src="./img/hongxin.png" v-show="bol">
                        </span>
                        <span class="oq">885</span>
                    </div>
                    <img src="./img/椭圆 3 拷贝 5@2x.png" alt="">
                </div>
            </div>
        </div>
<div class="Topic">
  <p>推荐话题</p>
    <div class="Topic_div">   
        <img src="./img/图层 14@2x(1).png" alt="">
        <img src="./img/图层 15@2x.png" alt="">
    </div>

<div class="bass">
            <div class="folw">
                <div class="folw_div">

                    <img src="./img/图层 16@2x.png">
                </div>
                <div class="flow_div_span">
                    <span>错过</span>
                    <span>216粉丝</span>
                    <div>
                        <img src="./img/矩形 17 拷贝@2x.png" class="flow_div_span_img2" @click="pn" v-show="show">
                        <img src="./img/矩形 16 拷贝 3@2x.png" class="flow_div_span_img" @click='pnn' v-show="!show">
                    </div>
                    
                </div>
                
            </div>
            <div class="vidio">
                <p class="vidio_p">发现一首好听的个，来分享</p>
                <div>
                    <video src="http://124.236.34.30/vcloud1049.tc.qq.com/1049_M2103207001nEmqg4Vm8xy1001539173.f20.mp4?vkey=DFE499F69A9887D2971746B45713BC5365BF132CD5FBE7F1AF357F4C38B15B922969ADC6FEF375B59AD0723E66292CB6211948A1F0CC8C7DA3272C2ABE6E67B4137453FE348A9CC3A43BCB5309FAE1F6DC1EE91DC4B2DE05" preload="./img/but.png" controls='controls'></video>
                </div>
                <div class="vidio_p2">
                    <span class="vidio_p2_span">今天:21:20</span>
                    <img src="./img/矢量智能对象 拷贝 2@2x.png">
                    <span>1314</span>
                    <div class="clil" @click='fnn'>
                        <span class="opp">
                            <img src="./img/hongxin.png" v-show="boli">
                        </span>
                        <span class="oqq">666</span>
                    </div>
                    <img src="./img/椭圆 3 拷贝 5@2x.png" alt="">
                </div>
            </div>
        </div>
</div>
 
 
  </div>
</template>

<script>
export default {
  data() {
    return {
                bol:false,
                boli:false,
                show:false
    }
  },
  methods: {
            fn(){
                if(this.bol == false ){
                    document.getElementsByClassName('oq')[0].innerHTML = '886';
                    this.bol=true;
                }else{
                    document.getElementsByClassName('oq')[0].innerHTML = '885';
                    this.bol=false;
                };
            },
            fnn(){
                if(this.boli == false ){
                    document.getElementsByClassName('oqq')[0].innerHTML = '667';
                    this.boli=true;
                }else{
                    document.getElementsByClassName('oqq')[0].innerHTML = '666';
                    this.boli=false;
                };
            },
            pn(){
                this.show = !this.show;
            },
            pnn(){
                this.show = !this.show;
            },
            dn(){
this.show = !this.show;
            },
            dnn(){
this.show = !this.show;
            }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>

// .recommend{
//   font-size: 30px;
// }
@r : 100rem;
.div_img{
  
  width: 686/2/@r;
  height: 382/2/@r;

  padding: 24/2/@r 30/2/@r;
//   border: 1px solid #ccc;
  img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
  }
}
.folw{
    overflow: hidden;
    margin-left: .2rem;
    position: relative;
    .folw_div{
        width: 90/2/@r;
        height: 90/2/@r;
        float: left;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .flow_div_span{
            overflow: hidden;
            float: left;
            margin-left: .1rem;
            span{
                display: block;
                margin-top: .04rem;
            }
            span:nth-child(1){
                font-size: 28/2/@r;
                color: rgb(51,153,255);
            }
            span:nth-child(2){
                font-size: 24/2/@r;
                color: rgb(153,153,153);
            }
            .flow_div_span_img{
              position: absolute;
              width: 90/2/@r;
              height: 44/2/@r;
              top: .05rem;
              right: .2rem;
            }
            .flow_div_span_img2{
                position: absolute;
              width: 90/2/@r;
              height: 44/2/@r;
              top: .05rem;
              right: .2rem;
            }
        }
}
.vidio{
    .vidio_p{
        margin-left: 40/2/@r;
        margin-top: 20/2/@r;
        margin-bottom: 20/2/@r;
        font-size: 28/2/@r;
        color: rgb(51,51,51);
    }
    video{
        width: 686/2/@r;
        height: 382/2/@r;
        border-radius: 20px;
        margin-left: 30/2/@r;
    }
    div{
        position: relative;
        img{
            width: 0.2rem;
            height: 0.2rem;
            position: absolute;
            // top: 0.55rem;
            left: -.0rem;
        }
    }
    .vidio_p2{
        height: .25rem;
        border-bottom: 1px solid rgb(232,232,232);
        margin-top: .1rem;
        position: relative;
        .clil{
            position: relative;
            position: absolute;
            height: 40/2/@r;
            width: .5rem;
            top: -0.16rem;
            left: 2.5rem;
            // background: url('./img/ads.png') no-repeat -.015rem .0rem;
            // background-size: 40/2/@r;
           span{
               font-size: 22/2/@r;
               color: #cccccc;
               text-align: right;
               line-height: 40/2/@r;
                margin-left: .25rem;
               
           }
            .opp{
            display: inline-block;
            position: absolute;
            height: 40/2/@r;
            width: .5rem;
            left: -.3rem;
            top:.13rem;
            background: url('./img/ads.png') no-repeat -.015rem .0rem;
            background-size: 40/2/@r;
            // display: none;
            }
        }
        .cli{
            position: relative;
            position: absolute;
            height: 40/2/@r;
            width: .5rem;
            top: -0.16rem;
            left: 2.5rem;
            // background: url('./img/ads.png') no-repeat -.015rem .0rem;
            // background-size: 40/2/@r;
           span{
               font-size: 22/2/@r;
               color: #cccccc;
               text-align: right;
               line-height: 40/2/@r;
                margin-left: .25rem;
               
           }
           .oq{
               top: .1rem;
           }
            .op{
            display: inline-block;
            position: absolute;
            height: 40/2/@r;
            width: .5rem;
            left: -.3rem;
            top:.13rem;
            background: url('./img/ads.png') no-repeat -.015rem .0rem;
            background-size: 40/2/@r;
            // display: none;
            }
        }
        span:nth-child(1){
            margin-left: 60/2/@r;
            font-size: 22/2/@r;
            color: rgb(204,204,204);
            position: absolute;
            top: -0.02rem;
        }
        span:nth-child(3){
            position: absolute;
            float: right;
            left: 2rem;
            font-size: 22/2/@r;
            color: rgb(204,204,204);
        }
       
        img{
            position: absolute;
        }
       
        img:nth-child(2){
            width: 40/2/@r;
            height: 40/2/@r;
            left: 1.75rem;
            top: -.07rem;
        }
        img:nth-child(5){
            position: absolute;
            width: 0.2rem;
            height: .04rem;
            left: 3.2rem;
            top: .05rem;
        }
        
       
    }
    
}
.Topic{
    p{
       
        font-size: 32/2/@r;
        color: rgb(51,51,51);
        font-weight: 900;
        margin-left: .2rem;
        // padding: 24/2/@r 0 0 0;
    }
    .Topic_div{
      height: 238/2/@r;
    //   border: 1px solid #ccc;
    //   background-color: aquamarine;
    padding: .1rem 0rem .1rem .15rem ;
      img:nth-child(1){
          height: 100%;
          width: 434/2/@r;
          border-radius: 5px;
      }
      img:nth-child(2){
        height: 100%;
        width: 1.346rem;
        border-radius: 5px;
      }
    }
}
.bass{
  margin-bottom: .49rem;
}
</style>
