<template>
  <div id="box">
    <div id="bg">
       <!-- 头 -->
      <div class="head">
        <router-link to="/home">
      <img src="./img/icon-01@2x.png">
      </router-link>
      <!-- <router-link to="/qwe"><img src="./img/icon-01@2x.png"></router-link> -->
      <span>排行榜</span>
      </div>
      <!-- 内容1 -->
      <div>
          <ul>
            <li>
                <div class="neir">
                <img src="./img/picture-01@2x.png">
                <div>
                <ul>
                <li>1.Hello on may</li>
                <li>2.Love You Like the Mo...</li>
                <li>3.baby-justin bieber</li>
                </ul>
                <img src="./img/typeface-01@2x.png" class="por">
                </div>
                </div>
            </li>
          </ul>
      </div>
<!-- 内容2 -->
      <div>
          <ul>
            <li>
                <div class="neir">
                <img src="./img/picture-02@2x.png">
                <div>
                <ul>
                <li>1.Hey Jude</li>
                <li>2.only you</li>
                <li>3.careless whisper</li>
                </ul>
                <img src="./img/typeface-02@2x.png" class="por por2">
                </div>
                </div>
            </li>
          </ul>
      </div>
<!-- 内容3 -->
      <div>
          <ul>
            <li>
                <div class="neir">
                <img src="./img/picture-03@2x.png">
                <div>
                <ul>
                <li>1.call me maybe-Carly R...</li>
                <li>2.let her go-Passenger</li>
                <li>3.Diamonds-Rihanna</li>
                </ul>
                <img src="./img/typeface-03@2x.png" class="por por2">
                </div>
                </div>
            </li>
          </ul>
      </div>
<!-- 内容4 -->
      <div class="qwe">
          <ul>
            <li>
                <div class="neir">
                <img src="./img/picture-04@2x.png">
                <div>
                <ul>
                <li>1.animals-Martin Garrix</li>
                <li>2.Faded-Alan WAIKER</li>
                <li>3.Happy-Pharrell Williams</li>
                </ul>
                <img src="./img/typeface-04@2x.png" class="por">
                </div>
                </div>
            </li>
          </ul>
      </div>
      <div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    }
  },
  methods: {
    
  },
  components: {
  },
  mounted () {
       
      }

}
</script>

<style scoped lang="less">
    #box{
      width:100%;
      height:100%;
      overflow: hidden;
      background-image:url(img/底图.jpg);
      background-repeat:repeat-y;
      background-attachment:fixed; //移动端不兼容
      background-size:100% auto;
    }
    #bg{
      background-color: #ecebd9;
      opacity:.9;
      height:100%;
      overflow: hidden;
    }
    .head{
        display:flex;
        color:rgb(51,51,51);
        padding-top:.5rem;
        padding:.32rem;
        justify-content:center;
        align-items:center;
        // border: 1px solid #000;
        img{
          width:.44rem;
          height:.44rem;
          margin-left:.32rem;
          flex:.1;
          position: absolute;;
          left:0rem;
        }
        span{
          // font-family:"汉仪良品线粗简常规";
          font-size:.36rem;
          // flex:1;
        }
    }
    .neir{
      display: flex;
      // border: 1px solid #000;
      margin-top:0rem;
      img{
        width:2.12rem;
        height:2.12rem;
        // border:1px solid #000;
        margin:.32rem;
        margin-top:0rem;
      }
      ul{
        list-style: none;
        overflow: hidden;
        li{
          font-size:.36rem;
          text-align: left;
          color:rgb(102, 102, 102);
          margin-top:.32rem;
        }
        li:nth-child(1){
          margin-top: 0rem;
        }
      }
      .por{
        width:1.55rem;
        height:.68rem;
        margin-left:-2.18rem;
        margin-top:-1.35rem;
        overflow: hidden;
      }
      .por2{
        height:.6rem;
      }
    }
</style>
