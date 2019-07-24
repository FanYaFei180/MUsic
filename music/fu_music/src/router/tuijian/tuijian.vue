<template>
  <div>
      <div class="hot">
        <div class="nain">
        <h1>热门推荐</h1>
        <ul>
          <li>
            <img src="./image/picture-04@2x.png" alt="">
            <p>愿你岁月无波澜,敬我余生不悲欢</p>
          </li>
          <li>
            <img src="./image/picture-05@2x.png" alt="">
            <p>这世界车水马龙,我只对你情有独钟</p>
          </li>
          <li>
            <img src="./image/picture-04@2x.png" alt="">
            <p>我知道风里有诗,那正是民谣的歌</p>
          </li>
        </ul>
        </div>
        <div class="nain">
        <h1>最新音乐</h1>
        <ul>
          <li>
            <img src="./image/picture-01@2x.png" alt="">
            <p>Doen Forfile</p>
            <p>Ditty Minds </p>
          </li>
          <li>
            <img src="./image/picture-02@2x.png" alt="">
            <p>A Brand New</p>
            <p>Passenger</p>
          </li>
          <li>
            <img src="./image/picture-03@2x.png" alt="">
            <p>春风十里不如你</p>
            <p>鹿先森乐队</p>
          </li>
        </ul>
        </div>
        <div class="nain mv">
          <h1>最新MV</h1>
          <ul>
            <li>
              <img src="./image/picture-07@2x.png" alt="">
              <p>如果说你爱我</p>
              <p>F·I.R</p>
            </li>
            <li>
              <img src="./image/picture-08@2x.png" alt="">
              <p>让水倒流</p>
              <p>伍佰 China Blue</p>
            </li>
          </ul>
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

  }
}
</script>

<style scoped lang="less">
@clor:rgb(2,89,84);
@maincloor:#666;
  .hot{
    margin-bottom: 1.25rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    &::before{
      content: "";
      position: absolute;
      background-image: url('./image/bj.png'); 
      background-position: center center;
      // background-size: cover;
      background-repeat: repeat;
      filter: opacity(10%); 
      width: 100%;
      height: 10.55rem;
      left: 0;
      right: 0;
    }
    .nain{
      margin:  0 .32rem;
      h1{
        font-size: .33rem;
        color: @clor;
        line-height: .6rem;
      }
      ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        li{
          font-size: .22rem;
          color: @maincloor;
          display: flex;
          width: 33.333%;
          flex-direction: column;
          justify-items: center;
          &:nth-of-type(2){
            margin: 0 .2rem;
          }
          p{
            &:nth-of-type(2){
              color: rgb(153, 153, 153);
              font-size: 0.18rem;
              margin-top: .2rem;
            }
          }
        }
      }
    }
    .mv>ul>li{
      width: 50%;
      &:nth-of-type(2){
        margin-right: 0;
      }
    }
  }
</style>
