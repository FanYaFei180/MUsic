<template>
  <div class="mine">
    <div class="top">
      <!-- 头像 -->
      <div class="top_top">
        <p class="tou">
          <img src="./img/头像.png">
          <br>smily
        </p>
        <div class="set">
          <img src="./img/icon1.png">
        </div>
        <ul class="top_bou">
          <li class="line">
            <p class="one">
              <img src="./img/icon2.png">成长等级
            </p>
            <p class="two">今日听歌0分钟</p>
          </li>
          <li>
            <p class="one">
              <img src="./img/icon3@1.png">会员中心
            </p>
            <p class="two">领1个月免费会员</p>
          </li>
        </ul>
      </div>
      <ul class="top_bottom">
        <li>
          <img src='./img/icon4@1.png'>
          <p>本地音乐</p>
          <span>(168)</span>
        </li>
         <li>
          <img src='./img/icon5@1.png'>
          <p>最近播放</p>
          <span>(159)</span>
        </li>
         <li>
          <img src='./img/icon6@1.png'>
          <p>我的下载</p>
          <span>(120)</span>
        </li>
         <li>
          <img src='./img/icon7@1.png'>
          <p>我的收藏</p>
          <span>(264)</span>
        </li>
         <li>
          <img src='./img/icon8@1.png'>
          <p>我的电台</p>
          <span>(100)</span>
        </li>
      </ul>
    </div>
    <div class="crea">
        <p class="creat_song">创建歌单<span>（1）</span><span class="song_"><div></div><div></div><div></div></span></p>
        <div class='creat_'>
            <img src="./img/p-5@1.png" class="creat_like">
            <img src="./img/矢量智能对象(8).png" class="creat_hear">
            <div class="like_num">
                <p>我喜欢</p>
                <span>4首</span>
            </div>
            <img src="./img/矢量智能对象(13).png" class="less_than">
        </div>
    </div>
    <!-- 经典金曲 -->
    <div class="golden">
        <div class="golden_son"><p>经典金曲</p>
        <span class="change" @click='change'><img src="./img/矢量智能对象(12).png"> 换一换</span></div>
       <ul class="golden_list">
           <li v-for="(item,index) in arr" :key='index'>
            <a href="javaScript:;">
                <img :src="item.pic">
                <p>{{item.name}}</p>
                <span>{{item.singer}}</span>
            </a>
           </li>
            <!-- <li>
            <a href="javaScript:;">
                <img src="./img/p-2@1.png">
                <p>薛氏情歌</p>
                <span>薛之谦</span>
            </a>
           </li>
            <li>
            <a href="javaScript:;">
                <img src="./img/p-2@1.png">
                <p>薛氏情歌</p>
                <span>薛之谦</span>
            </a>
           </li> -->
       </ul>
    </div>
    <Foor></Foor>
  </div>
</template>

<script>
import Foor from '../../components/foot.vue';
import Axios from "../../../node_modules/axios/dist/axios.js";
export default {
  data() {
    return {
       arr: [],
       num:1,
       id:26,
       pageSize:8,
       page:0,
       format:1
    };
  },
  mounted() {
    Axios.get(
      "https://v1.itooi.cn/tencent/topList?",{
        params:{
          id:this.id,
          pageSize:this.pageSize,
          page:this.page,
          format:this.format
        }
      }
    )
      .then(response => {
        this.arr = response.data.data;
        return this.arr.splice(0, 5);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    change(){
      this.num++;
      Axios.get("https://v1.itooi.cn/tencent/topList?",{
        params:{
          id:26,
          pageSize:8,
          page: this.num++,
          format:1
        }
      }
    )
      .then(response => {
        this.arr = response.data.data;
        return this.arr.splice(0, 5);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  components: {
    Foor
  }
};
</script>

<style scoped lang="less">
@r: 100rem;
@c:rgb(51, 51, 51);
@wg:600;
a{
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
}
.mine {
  background: rgb(244, 244, 244);
  height: 100%;
  .top {
    padding: 0 32/2 / @r;
    background: #fff;
    margin-bottom:20/2/@r;
    .top_top {
      width: 686/2 / @r;
      height: 327/2 / @r;
      margin-top: 0.1rem;
      border-radius: 15/2 / @r;
      box-shadow: 0 0 5px #ccc;
      position: relative;
      .set {
        position: absolute;
        right: 0.2rem;
        top: 0.15rem;
        img {
          width: 40/2 / @r;
        }
      }
      .tou {
        padding-top: 15/2 / @r;
        text-align: center;
        font-size: 46/2 / @r;
        color: rgb(51, 51, 51);
        font-weight: 600;
        img {
          width: 145/2 / @r;
        }
      }
      .top_bou {
        display: flex;
        li {
          flex: 1;
          text-align: center;
          margin: 0.06rem 0;
          p {
            img {
              width: 36/2 / @r;
              vertical-align: top;
            }
          }
          .one {
            font-size: 32/2 / @r;
            color: rgb(51, 51, 51);
            font-weight: 600;
          }
          .two {
            font-size: 28/2 / @r;
            color: rgb(153, 153, 153);
          }
        }
        .line {
          border-right: 1px solid #e4d9d9;
        }
      }
    }
    .top_bottom{
        display: flex;
        padding: 34/2/@r 0 .1rem 0;
        li{
            flex:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: .22rem;
            img{
                width: 54/2/@r;
            }
            p{
                color:@c;
                font-weight: 500;
                font-size:.14rem;
            }
            span{
                color: rgb(204, 204, 204);
                font-size:.13rem;
            }
        }
    }
  }
.crea{
  cursor: pointer;
    background: #fff;
     padding: 22/2/@r 32/2 / @r;
     margin-bottom:.1rem;
    .creat_song{
        overflow: hidden;
        font-size: 38/2/@r;
        color:@c;
        font-weight: @wg;
        margin-bottom:17/2/@r;
        span{
          font-size: .16rem;
            color:rgb(153, 153, 153)
        }
        .song_{
            float: right;           
            div {
                display: inline-block;
                width: .05rem;
                height: .05rem;
                border-radius: 50%;
                background:rgb(204,204,204);
            }
            div:nth-child(2){
                margin:0 .03rem;
            }
        }
    }
    .creat_{
        overflow: hidden;
        position: relative;
        .creat_like{
            width: 125/2/@r;
            float: left;
        }
        .creat_hear{
          position: absolute;
          width: 53/2/@r;
          left:.18rem;
          top:.18rem;
        }
        .like_num{
            float:left;
            margin-left:17/2/@r;
            margin-top:20/2/@r;
            p{
                font-size: 36/2/@r;
                font-weight: @wg;
                color:rgb(51, 51, 51);
            }
            span{
                font-size: .14rem;
                color:rgb(153, 153, 153);
            }
        }
        .less_than{
            float:right;
            width: 40/2/@r;
            margin-top:60/2/@r;
        }
    }
}
.golden{
     padding: 22/2/@r 30/2 / @r;
     background: #fff;
     .golden_son{
         overflow: hidden;
         margin-bottom:15/2/@r;
       p{
           display:inline-block;
           font-size:38/2/@r;
           font-weight: @wg;
       }
       .change{
           display: inline-block;
           font-size:28/2/@r;
           color:rgb(204, 204, 204);
           float: right;
           img{
               width: 30/2/@r;
               vertical-align: middle;
           }
       }
     }
     .golden_list{
         display: flex;
         li{
             flex:1;
             a{
                 display: flex;
                 flex-direction: column;
                 img{
                     width: 210/2/@r;
                     border-radius: .14rem;
                 }
                 p{
                    font-size:30/2/@r;
                    color:@c;
                    margin-top:.05rem;
                 }
                 span{
                    font-size:27/2/@r;
                    color:rgb(153, 153, 153);
                 }
             }
         }
     }
}
}
</style>
