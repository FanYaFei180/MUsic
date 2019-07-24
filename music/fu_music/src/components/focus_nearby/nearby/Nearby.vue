<template>

  <div class="nearby">
    <!-- 头部 -->
   <Fnheader></Fnheader>
  <!-- 附近信息 -->
    <ul class="nearby_content">
      <h2>20条信息更新</h2>
      <li>
      <img  class="header_p" src="../fn_images/near_3.png" alt="">
      <div class="text">
        <p>甜甜圈刚刚分享了新歌</p>
        <span>
           <img src="../fn_images/near_8.png" alt="">
           <span>我</span>
        </span>
      </div>
      <div class="address"><img src="../fn_images/near_9.png" alt=""><span>0.1km</span></div>
      </li>
    <li>
      <img  class="header_p" src="../fn_images/near_5.png" alt="">
      <div class="text">
        <p>九公主刚刚分享了新歌</p>
        <span>
           <img src="../fn_images/near_10.png" alt="">
           <span>六年</span>
        </span>
      </div>
      <div class="address"><img src="../fn_images/near_9.png" alt=""><span>0.1km</span></div>
      </li>
        <li>
      <img  class="header_p" src="../fn_images/near_5.png" alt="">
      <div class="text care">
        <p>菠萝蜜刚刚关注了你</p>
        <span>
           <p>最近在听： 【为你我受冷风吹】  --胡彦斌</p> 
        </span>
      </div>
      <div class="address"><img src="../fn_images/near_9.png" alt=""><span>0.1km</span></div>
      </li>
      <li>
      <img  class="header_p" src="../fn_images/near_1.png" alt="">
      <div class="text">
        <p>么么哒分享了一首歌曲</p>
        <span>
           <img src="../fn_images/near_10.png" alt="">
           <span>海阔天空</span>
        </span>
      </div>
      <div class="address"><img src="../fn_images/near_9.png" alt=""><span>0.1km</span></div>
      </li>
          <li>
      <img  class="header_p" src="../fn_images/near_4.png" alt="">
      <div class="text care">
        <p>甜甜圈刚刚关注了你</p>
        <span>
           <p>最近在听： 【找自己】  --陶喆</p> 
        </span>
      </div>
      <div class="address"><img src="../fn_images/near_9.png" alt=""><span>0.1km</span></div>
      </li>
              <li>
      <img  class="header_p" src="../fn_images/near_2.png" alt="">
      <div class="text care">
        <p>分享歌单</p>
        <span>
           <p>【未来LIVE】</p> 
        </span>
      </div>
      <div class="address"><img src="../fn_images/near_9.png" alt=""><span>0.1km</span></div>
      </li>
    </ul>
   <!-- 尾部 -->
   <bofang></bofang>
  
  </div>
</template>

<script>
import Fnheader from '../Fnheader'
import bofang from '../../bofang/bofang'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
       Fnheader,
       bofang
  }
}
</script>

<style scoped lang='less'>
@keyframes action {
  0%{
      opacity: 1;
    }
     15%{
      opacity: .9;
    }
     20%{
      opacity: .7;
    }
    30%{
      opacity: .65;
    }
    45%{
      opacity: .6;
    }
    50%{
      opacity: .5;
    }
     65%{
      opacity: .65;
    }
    75%{
      opacity: .7;
    }
    80%{
      opacity: .75;
    }
    85%{
      opacity: .8;
    }
     95%{
      opacity: .9;
    }
     100%{
      opacity: 1;
    }
}
.nearby{
   background: url('../fn_images/near.jpg') no-repeat center center;
   background-size:cover;
   height: 100%;
   width: 100%;
  .nearby_content{
     padding:0 .32rem;
     h2{
       font-size: .28rem;
       color: rgb(153,153,153);
       height: .9rem;
       line-height: .9rem;
       text-align: center;
       margin-bottom: .15rem;
     }
     
     li{
       position: relative;
        overflow: hidden;
        margin-bottom: .29rem;
     img:hover{
    animation: action 1s linear 0s 2;
    }
      .header_p{
       width: .9rem;
       height: .9rem;
      float: left;
     }
     .care{
       p{
         text-align: left;
           
       }
     }
     .text{
      font-size: .25rem;
      color:rgb(51,51,51);
      float: left;
      margin-left: .32rem;
      span{
        margin-top: .24rem;
        display: flex;
        flex-direction: row;
         color: rgb(153,153,153);
        img{
          width: .49rem;
          height: .49rem;
        }
        span{
          margin-top: 0;
          height:.49rem;
          line-height: .49rem;
          margin-left: .32rem;
         
        }
      }
     }
     }
     .address{
     position: absolute;
     right:0;
      font-size: .17rem;
      width: 1.3rem;
      height: .4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img{
        width: .5rem;
        height: .5rem;
      }
      span{
        color: rgb(153,153,153);
      }
     }
  }
}
</style>
