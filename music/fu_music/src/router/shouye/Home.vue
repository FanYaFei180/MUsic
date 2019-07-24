<template>
  <div class="home">
     <!--  -->
      <sum></sum>
      <swiper></swiper>
      <div class="nav">
        <ul>
          <li>
            
            <img src="./image/iocn-01@2x.png" alt="">
            <p>推荐</p>
          </li>
          <li>
             <router-link to="/running">
            <img src="./image/iocn-02@2x.png" alt="">
            <p> <router-link to='/running'>排行</router-link> </p>
             </router-link>
          </li>
          <li>
            <img src="./image/iocn-03@2x.png" alt="">
            <p>歌单</p>
          </li>
          <li>
            <router-link to="/zhuan">
            <img src="./image/iocn-04@2x.png" alt="">
            <p>歌手</p>
            </router-link> 
          </li>
          <li>
            <img src="./image/icon-05@2x.png" alt="">
            <p>MV</p>
          </li>
          <li>
              <router-link to="/radio">
              <img src="./image/iocn-06@2x.png" alt="">
              <p>电台</p>
            </router-link> 
          </li>
        </ul>
      </div>
      <router-view></router-view>
      <bofang></bofang>
  </div>
</template>

<script>
// @ is an alias to /src
// import swiper from '@/components/swiper/swiper.vue'
import swiper from '../../components/swiper/swiper.vue'
// import bofang from '@/components/bofang/bofang.vue'
import bofang from '../../components/bofang/bofang.vue'
// import sum from '@/components/sum/sum.vue'
import sum from '../../components/sum/sum.vue'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  props: [],
  components: {
    swiper,
    bofang,
    sum
  },
  mounted () {
//获取元素
function gets(res){
  console.log(res);
}
  }
}
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
})

</script>

<style lang="less" scoped>
  .nav{
    margin-top: .33rem;
    font-size: .22rem;
    ul{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 .32rem;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: .6rem;
        a{
          color: rgb(51,51,51);
        }
        img{
          width: 100%;
        }
        p{
          margin-top: .12rem;
        }
      }
    }
  }
</style>

