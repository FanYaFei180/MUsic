<template>
  <div class="da">
    <div class="head">
        <img class="img1" @click="fns" src="./img/形状 1 拷贝 6@2x.png">
        <div class="text"><input class="ipt" type="text" placeholder='大家都在搜  那个女孩'></div>
        <img @click="fnn" class="img2" src="./img/矢量智能对象@2x.png">
    </div>
    <div class="lis">
        <p>热门搜索</p>
        <ul>
            <li v-for="(item,index) in list" :class="{'bai':item.light}" :key='index' @click="fn(index)">{{item.name}}</li>
        </ul>
    </div>
    <div class="footer lis">
        <p>热搜榜</p>
        <ol>
            <li>
                <div class="left">
                    1
                </div>
                <div class="right">
                    <p class="pp">来自天堂的魔鬼 &nbsp;&nbsp;<span>1455000</span> &nbsp;&nbsp;<span>HOT</span></p>
                    <p>回味来自邓紫棋的经典热单</p>
                </div>
            </li>
             <li>
                <div class="left">
                    2
                </div>
                <div class="right">
                    <p class="pp">我的名字  &nbsp;&nbsp;<span>1356224</span> &nbsp;&nbsp;<span>HOT</span></p>
                    <p>回味来自邓紫棋的经典热单</p>
                </div>
            </li>
            <li>
                <div class="left">
                    3
                </div>
                <div class="right">
                    <p class="pp">来自天堂的魔鬼 &nbsp;&nbsp;<span>1455000</span> &nbsp;&nbsp;<span>HOT</span></p>
                    <p>回味来自邓紫棋的经典热单</p>
                </div>
            </li>
            <li>
                <div class="left">
                    4
                </div>
                <div class="right">
                    <p class="pp">Taylor Swift新歌   &nbsp;&nbsp;<span>1325110</span> &nbsp;&nbsp;<span>HOT</span></p>
                    <p>回味来自邓紫棋的经典热单</p>
                </div>
            </li> 
        </ol>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        list:[{name:'我想你了',light:true},
        {name:'慌',light:false},
        {name:'醒着醉',light:false},
        {name:'即兴',light:false}
        ]
    }
  },
  methods: {
      fnn(){
          alert('此功能暂未开启')
      },
      fn(a){
        //   var ipt=document.getElementsByClassName('ipt')[0].val;
          for(let i=0;i<this.list.length;i++){
              this.list[i].light=false;
                // ipt.innerHTML='223
          }
          this.list[a].light=true;
          console.log(this.list.light);
      },
      fns(){
          this.$router.push('./mine');
      }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.da{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url('./img/搜索.jpg')center center  ;
    background-size:120% auto;
    .head{
        padding-top: .48rem;
        display: flex;
        justify-content: center;
        align-items: center;
        // align-content: center;
        img{
            width: .7rem;
            height: .7rem;
        }
       .img1{
           position: relative;
           left: -.1rem;
       }
       .img2{
           position: relative;
           left: .1rem;
       }
        .text{
            width: 5.6rem;
            height: 100%;
            display: flex;
            border-radius: 30px;
            // border: 1px solid black;
            background-color: #fff;
            justify-content: center;
            align-items: center;            
            .ipt{
            font-size: .24rem;
            width: 80%;
            height: .7rem;
            // border: 1px solid black;
            }
        }
    }
    .lis{
        p{
            font-size: .28rem;
            color: rgb(2, 89, 85);
            // position: relative;
            // left: 10px;
            text-align: left;
            text-indent: .25rem;
            margin: .8rem 0 .4rem 0;
        }
        ul{
            list-style: none;
            display: flex;
            justify-content: space-around;
            li{
                overflow: hidden;
                width: 1.38rem;
                height: .48rem;
                text-align: center;
                line-height: .48rem;
                border-radius: .3rem;
                // background-color: rgb(2, 89, 85);
                font-size: .24rem;
                color: rgb(2, 89, 85);
                    }
                .bai{
                background-color: rgb(2, 89, 85);
                color: #fff;
            }
                }
                // &:hover{
                //         li{
                //             color:red
                //         }
                //     }
    }
    .footer{
        p{
            font-size: .24rem;
        }
        ol{
            list-style: none;
            li{
                width: 100%;
                height: .6rem;
                margin: .32rem 0;
                display: flex;
                justify-content: start;
            align-items: center; 
            text-indent: .25rem;
            
                .left{
                    font-size: .24rem
                }
                .right{
                    p{
                        margin: 0;padding:0;
                    }
                    .pp{
                        color: black;
                    }
                   .pp:nth-child(1) span:nth-child(1){
                        color: #ccc;
                    }
                    .pp:nth-child(1) span:nth-child(2){
                        color: rgb(2, 89, 85);
                    }
                }
                .right>p:nth-child(2){
                        color: #ccc;                        
                    }
            }
        }
    }
}

</style>
