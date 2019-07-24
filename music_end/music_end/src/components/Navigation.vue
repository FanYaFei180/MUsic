<template>
<div>
  <header class="list">
    <router-link :to="msg[3].to1">
      <img :src="msg[0].img1" class="img1">
    </router-link>
    <router-link :to="msg[4].to2" v-if="msg[6].show">
      <div class="lis">
        <img :src="msg[1].img2" class="img2" @click="info">
        <input @input="wd()" type="text" v-model="history" :placeholder="msg[7].num" @click="fn">
        <span class="cha" v-show="guan" @click="close"></span>
      </div>
    </router-link>
    <router-link :to="msg[4].to2" v-else>
      <div class="lit">{{ msg[1].name }}</div>
    </router-link>

    <router-link to="/listening">
      <img :src="msg[2].img2" class="img3">
    </router-link>
  </header>
  <ul class="seek">
      <li v-for="(item,index) in ass" :key="index" v-html="item.songname_hilight"></li>
    </ul>
  <Search :arr="arr" style="display:none;"></Search>
</div>
</template>

<script>
import Search from '../conten/home/search/search.vue';
import Axios from "../../node_modules/axios/dist/axios.js";
export default {
  data() {
    return {
      history:"",
      arr:[],
      ass:[],
      guan:false,
    };
  },
  props: ["msg"],
  // updated(){
  //   this.$emit("par",this.history);
  // },
  // 
  methods: {
    fn() {
      this.msg[8].sum = !this.msg[8].sum;
    },
    wd(){
    this.guan=true,
    this.$http.get('https://v1.itooi.cn/tencent/search?',{
      params:{
        keyword:this.history,
        type:"song"
      }
      })
        .then( (response)=> {
          console.log(response);
          this.ass=response.data.data.list;
          // for(var i=0;i<response.data.data.list.length;i++){
          //   this.ass.push(response.data.data.list[i]);
          // }
          
          // return ass;
           console.log(this.ass);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    info(){
        if (this.history!==""){
                this.arr.push({
                text:this.history
                });
            }
      },
      close(){
         this.guan=false;
         this.history="";
         this.ass=[];
      }
     
  },
  components: {
    Search
  }
};
</script>

<style scoped lang='less'>
@r: 100rem;
.list {
  width: 100%;
  height: 88/2 / @r;
  background: linear-gradient(to right, #ffab97, #ff0a45);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .lis {
    width: 550/2 / @r;
    height: 60/2 / @r;
    background-color: #fff;
    border-radius: 33/2 / @r;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    .img2 {
      width: 32/2 / @r;
      height: 32/2 / @r;
      margin: 0.1rem;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
    }
  }
  .lit {
    width: 550/2 / @r;
    height: 60/2 / @r;
    line-height: 60/2 / @r;
    font-size: 36/2 / @r;
    color: #fff;
    text-align: center;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .img1 {
      width: 44/2 / @r;
      height: 44/2 / @r;
    }
    .img3 {
      width: 44/2 / @r;
      height: 44/2 / @r;
    }
  }
}
  .seek{
    width:100%;
    background: #fff;
    position: absolute;
    top:44/@r;
    margin-bottom: 30/@r;
    li{
      padding: 5/@r;
      line-height: 30/@r;
      font-size:13/@r; 
      border-bottom:1/@r solid #a09e9e52; 
      cursor: pointer;
      text-indent: 30/@r;
      background: url("logo-y.png") no-repeat 7/@r 11/@r;
      background-size:18/@r 18/@r; 
    }
  }
  .cha{
    display:inline-block;
    width:25/@r;
    height:25/@r;
    display: inline-block;
    background: url("cha-icon.png") no-repeat center center;
    background-size:15/@r 15/@r; 
    position: absolute;
    left: 88%;
  }
</style>

