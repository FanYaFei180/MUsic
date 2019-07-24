<template>
  <div id="box"> 
      <!-- 导航 -->
          <sum></sum>
    <!-- 导航2 -->
    <div id="box3">
        <ul>
            <li>
                <img src="./img/first-one@2x.png">
                <span>最新电音</span>
            </li>
            <li>
                <img src="./img/first-two@2x.png">
                <span>私人FMX</span>
            </li>
            <li>
                <img src="./img/first-three@2x.png">
                <span>Sati空间</span>
            </li>
            <li>
                <img src="./img/first-four@2x.png">
                <span>私藏推荐</span>
            </li>
        </ul>
    </div>
    <!-- 音乐列表 -->
        <ul id="box4">
            <li><img src="./img/second-one@2x.png"><span>本地音乐<span>(0)</span></span></li>
            <li><img src="./img/second-two@2x.png"><span>最近播放<span>(17)</span></span></li>
            <li><img src="./img/second-three@2x.png"><span>下载管理<span>(3)</span></span></li>
            <li><img src="./img/second-four@2x.png"><span>我的电台<span>(0)</span></span></li>
            <li><img src="./img/second-five@2x.png"><span>我的收藏<span>(专辑/歌手/视频/专栏/主题)</span></span></li>
        </ul>
        <!-- 歌单 -->
        <div class="box5">
            <img src="./img/left-two@2x.png" @click="fn3()" class="none_p1">
            <img src="./img/up.png" v-show class="none_p2" @click="fn4()">
            <span>创建歌单</span>
           <div class="box6">
            <img src="./img/right-two-2@2x.png">
            <img src="./img/right-two-1@2x.png" @click="fn()">
           </div>
        </div>
        <!-- 详情 -->
        <div class="none1">
            <ul id="box7">
            <img src="./img/photo@2x.png">
            <div>
                <p>我喜欢的音乐</p>
                <span>213首</span>
            </div>
            <img src="./img/right-two-2@2x.png" class="por2">
        </ul>
        <ul id="box7">
            <img src="./img/photo-2@2x.png">
            <div>
                <p>我喜欢的音乐</p>
                <span>213首</span>
            </div>
            <img src="./img/right-two-2@2x.png" class="por2">
        </ul>
        <ul id="box7">
            <img src="./img/photo-3@2x.png">
            <div>
                <p>我喜欢的音乐</p>
                <span>213首</span>
            </div>
            <img src="./img/right-two-2@2x.png" class="por2">
        </ul>


        </div>
    <div class="box5 box7">
        <img src="./img/left-two@2x.png"><span>收藏的歌单</span>
        <div class="box6 box8">
            <img src="./img/right-two-2@2x.png">
            <img src="./img/right-two-1@2x.png">
        </div>
    </div>
    <ul id="box7">
            <img src="./img/photo-four@2x.png">
            <div>
                <p>我收藏的音乐</p>
                <span>0首</span>
            </div>
            <img src="./img/right-two-2@2x.png" class="por2">
        </ul>

  </div>
</template>

<script>
import sum from '@/components/sum/sum.vue'
export default {
    data() {
        return {
            
            }
  },
  methods: {
    fn3(){
        $('.none_p2').show();
        $('.none_p1').hide();
        $('.none1').slideUp()
    },
    fn4(){
        $('.none_p1').show();
        $('.none_p2').hide();
        $('.none1').slideDown();
    }
  },
  components: {
      sum
  },
  mounted () {
    
  }
}
</script>

<style scoped lang="less">
    #box{
        width:100%;
        height:auto;
        background:url(./img/我的.png)no-repeat;
        background-size:100% auto;
        // overflow: hidden;
        #box2{
            margin:0rem .32rem;
            padding-top:.16rem;
            padding-bottom:.16rem;
            display: flex;
            font-size:.36rem;
            justify-content: space-between;
            img{
                width:.44rem;
                height:.44rem;
            }
            li:nth-child(2){
                color:#025955;
                border-bottom:.04rem solid #025955;
            }
        }
        }
        #box3{
            padding-left:.32rem;
            padding-right:.32rem;
            ul{
                list-style: none;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                li{
                    display: flex;
                    flex-direction: column;
                    img{
                        width:.72rem;
                        height:.72rem;
                    }
                    span{
                        color:rgb(102, 102, 102);
                        font-size:.22rem;
                        margin-left:-.05rem;
                    }
                }
            }
        }
        #box4{
            margin-top:.4rem;
            overflow: hidden;
            z-index:99;
            li{
                display: flex;
                margin-bottom:.4rem;
                img{
                    width:.48rem;
                    height:.48rem;
                    margin-left:.32rem;
                }
                span{
                    font-size:.28rem;
                    margin-left:.2rem;
                    color: #000;
                    span{
                        font-size:.24rem;
                        margin-left:.1rem;
                    }
                }
            }
        }
        .box5{
            display: flex;
            margin-bottom:.4rem;
            img{
                width:.48rem;
                height:.48rem;
                margin-left:.32rem;
            }
            span{
                font-size:.32rem;
                margin-left:.2rem;
                color: #000;
            }
        }
        .box6{
            margin-left:3.95rem;
            img{
                float: right;
                width:.48rem;
                height:.48rem;
                margin: 0;
                padding: 0;
            }
        }
        #box7{
            margin-top:.2rem;
            overflow: hidden;
            display: flex;
            img{
                width:1rem;
                height:1rem;
                margin-left:.32rem;
            }
           div{
               display: flex;
               flex-direction:column;
               margin-left:.2rem;
               justify-content: center;
               p{
                   font-size:.28rem;
                   color:#000;
               }
               span{
                   font-size:.24rem;
                   color:#ccc;
               }
           }
           .por2{
               width:.48rem;
               height:.48rem;
                margin-left:3.5rem;
               margin-top:.25rem;
           }
        }
        .box7{
            margin-top:.2rem;
            .box8{
                margin-left:3.65rem;
            }
        }
        // .qqq{
        //     display: none;
        //     position: absolute;
        //     margin-top:-5.9rem;
        //     margin-left:4.95rem;
        //     background: #000;
        //     opacity:.6;
        //     width:2rem;
        //     height:.5rem;
        //     li{
        //         color:#fff;
        //         font-size:.35rem;
        //         text-indent:.1rem;
        //         line-height: .5rem;
        //     }
        //     .none1{
        //         overflow: hidden;
        //         z-index:1;
        //     }
        // }
</style>
