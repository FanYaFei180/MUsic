<template>
  <div>
      <div class="box-s">
        <p class="lishi">搜索历史<span @click="empty()"></span></p>
        <ul class="singer">
          <li v-for="(item,index) in arr" :key="index">{{item.text}}</li>
        </ul>
        <p class="hot-r">热搜榜</p>
        <ul class="ranking">
          <li>
            <span class="num-tit red">1</span>
            <p>千与千寻<span>1137922</span><i class="red">HOT</i></p>
            <p>宫崎骏的经典动画，多久都不会过时啊！</p>
          </li>
          <li>
            <span class="num-tit red">2</span>
            <p>起风了<span>1137922</span><i class="red">HOT</i></p>
            <p>纵有疾风起，人生不言弃</p>
          </li>
          <li>
            <span class="num-tit red">3</span>
            <p>不值得<span>1137922</span><i class="red">HOT</i></p>
            <p>又在某音火起来而且温柔的歌！</p>
          </li>
          <li>
            <span class="num-tit">4</span>
            <p>电灯胆<span>1137922</span><i class="red">HOT</i></p>
            <p>去KTV，唱这首粤语歌就对了~</p>
          </li>
          <li>
            <span class="num-tit">5</span>
            <p>邓紫棋<span>1137922</span><i class="red">HOT</i></p>
            <p>唱功了得的新一代创作小天后！</p>
          </li>
          <li>
            <span class="num-tit">6</span>
            <p>lil mama<span>1137922</span><i class="red">HOT</i></p>
            <p>听了会上瘾的轻快小调！</p>
          </li>
          <li>
            <span class="num-tit">7</span>
            <p>失重<span>1137922</span><i class="red">HOT</i></p>
            <p>郁可唯-《老男孩 电视剧原声带》</p>
          </li>
        </ul>
      </div>
      <Foor></Foor>
  </div>
</template>

<script>
import Foor from '../../../components/foot.vue';
export default {
  data() {
    return {
      
    }
  },
  props: ["arr"],
  methods: {
    empty(){
      this.arr=[];
    }
  },
  components: {
    Foor
  }
}
</script>

<style scoped lang="less">
  @r:100rem;
.box-s{
  font-size: 20px;
   padding: 0 33/2/@r;
}
.lishi{
  margin-top: 23/2/@r;
  font-size: 32/2/@r;
  color: #333333;
    span{
      display: inline-block;
      float: right;
      width:32/2/@r;
      height:32/2/@r;
      background: url("img-search/icon-delete.png") no-repeat;
      background-size:32/2/@r 32/2/@r;
      cursor: pointer;
    }
  }
  .singer{
    margin-top:40/2/@r;
    overflow: hidden;
    li{
      float: left;
      font-size: 26/2/@r;
      padding:33/2/@r 32/2/@r;
    }
  }
  .hot-r{
    font-size: 32/2/@r;
    margin-top: 45/2/@r;
  }
  .ranking{
     margin-bottom: 60/@r;
    li{
      margin:40/2/@r 0;
      overflow: hidden;
    }
    .num-tit{
      display: inline-block;
      width:47/2/@r;
      height:70/2/@r;
      line-height:70/2/@r;
      font-size: 28/2/@r;
      float: left;
    }
    p{
      float: left;
    }
    p:nth-child(2){
      width:80%;
      font-size:26/2/@r;
      color: #333333;
      span{
        color: #b3b3b3;
        font-size:20/2/@r;
        padding: 0 30/2/@r;
      }
      i{
        display: inline-block;
        font-size:20/2/@r;
      }
    }
    p:nth-child(3){
      width:80%;
      color: #999999;
      font-size:20/2/@r;
      margin-top:10/2/@r;
    }
  }
  .red{
    color:#ff1c1c;
  }
</style>
