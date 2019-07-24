<template>
    <div class="find">
       <div class="follow">
            <p>我的关注</p>
            <div class="Head_portrait">
                <ul>
                    <li>
                        <img src="./img/V@2x.png">
                    </li>
                    <li>
                        <img src="./img/V 拷贝@2x.png">
                    </li>
                    <li>
                        <img src="./img/形状 2 拷贝@2x.png">
                    </li>
                    <li>
                        <img src="./img/V 拷贝 3@2x.png">
                    </li>
                    <li>
                        <img src="./img/形状 2@2x.png">
                    </li>
                    <li>
                        <img src="./img/V 拷贝 5@2x.png">
                    </li>
                </ul>
            </div>
        </div>


          <div class="boss">
            <div class="folw">
                <div class="folw_div">

                    <img src="./img/形状 2 拷贝 2@2x.png">
                </div>
                <div class="flow_div_span">
                    <span>百年孤独_花儿</span>
                    <span>600粉丝</span>   
                </div>
                
            </div>
            <div class="vidio">
                <p class="vidio_p">世界的魔鬼，一人的天使</p>
                <div>
                    
                    <video src="http://116.178.68.22/vcloud1049.tc.qq.com/1049_M2104080004LzkEi4ReQ0X1001538806.f20.mp4?vkey=C3C0DAD7E6476FBE37620D11B2DE019E53C7EA3D1691422167A014FCB8AAD78A6EF5172EB09A2B7D1563DD4BD5F5FA5DAD0D0E76DECA281E43973168F693B07DB04A4B97511ADEBBC2AFC9E9631025A2B4D9E3FDD8D992DB" preload="./img/but.png" controls='controls'></video>
                </div>
                <div class="vidio_p2">
                    <span>今天:21:20</span>
                    <img src="./img/矢量智能对象 拷贝 2@2x.png">
                    <span>1314</span>
                    <div class="cli" @click='fn'>
                        <span class="op">
                            <img src="./img/hongxin.png" v-show="bol">
                        </span>
                        <span class="oq">348</span>
                    </div>
                    <img src="./img/椭圆 3 拷贝 5@2x.png" alt="">
                </div>
            </div>
        </div>
        
<div class="boss bass">
             <div class="folw">
                <div class="folw_div">
                    <img src="./img/形状 2 拷贝 3@2x.png">
                </div>
                <div class="flow_div_span">
                    <span>离别时相逢的开始</span>
                    <span>1020粉丝</span>   
                </div>
                
            </div>
            <div class="vidio">
                <p class="vidio_p">相逢不晚为何匆匆</p>
                <div>
                    <video src="http://1.198.4.143/vcloud1049.tc.qq.com/1049_M2112200003LZGio4XlrTz1001541653.f20.mp4?vkey=6E9C2A0DBFDE328A979067AE68ED5914A57785F0210443C6196E527021FAD940BB1BA0C6241A653802FBBF399486E8EB74808682C6B0A05FA4EB4E36165C658215D3D6D8156E9BD0C8CEC4720B3DB5230B5387378EFCB0B8" preload="./img/but.png" controls='controls'></video>
                </div>
                <div class="vidio_p2">
                    <span>今天:21:20</span>
                    <img src="./img/矢量智能对象 拷贝 2@2x.png">
                    <span>1314</span>
                    <div class="clil" @click='fnn'>
                        <span class="opp">
                            <img src="./img/hongxin.png" v-show="boli">
                        </span>
                        <span class="oqq">500</span>
                    </div>
                    <img src="./img/椭圆 3 拷贝 5@2x.png" alt="">
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
                boli:false
            }
        },
        methods: {
            fn(){
                if(this.bol == false ){
                    document.getElementsByClassName('oq')[0].innerHTML = '349';
                    this.bol=true;
                }else{
                    document.getElementsByClassName('oq')[0].innerHTML = '348';
                    this.bol=false;
                };
            },
            fnn(){
                if(this.boli == false ){
                    document.getElementsByClassName('oqq')[0].innerHTML = '501';
                    this.boli=true;
                }else{
                    document.getElementsByClassName('oqq')[0].innerHTML = '500';
                    this.boli=false;
                };
            }
        },
        components: {
          
        }
    }
</script>

 <style scoped lang="less">
// .find{
//     font-size: 20px;
// }
@r : 100rem;

.follow{
    // padding: 24/2/@r 0 0 35/2/@r;
    // height: 250/2/@r;
    p{
       
        font-size: 32/2/@r;
        color: rgb(51,51,51);
        font-weight: 900;
        margin-left: .2rem;
        padding: 24/2/@r 0 0 0;
    }
}
.Head_portrait{
    ul{

        padding:0 0 0 .1rem;
        overflow: hidden;
        li{
            width: 100/2/@r;
            height: 100/2/@r;
            float: left;
            margin-left: 20/2/@r;
            margin-top: 20/2/@r;
        img{
            width: 100%;
            height: 100%;
        }
      }
    }
}
.folw{
    overflow: hidden;
    margin-left: .2rem;
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
            top: -.16rem;
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
            top: -.16rem;
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
.bass{
    margin-bottom: .49rem;
}
</style>
