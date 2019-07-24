<template>
  <div class="discover">
    <Navigation :msg="list"></Navigation>
    <div class="title">
            <router-link class="xian" to='/discover/find'>关注</router-link>
            <router-link to='/discover/recommend'>推荐</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
        <Foor></Foor>
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import Foor from '../../components/foot.vue';
export default {
  data() {
    return {
      list: [
        { img1: require("./img-discover/icon-menu.png") },
        { img2: require("./img-discover/icon-search.png") },
        { img2: require("./img-discover/icon-add.png") },
        { to1: '/home'},
        { to2: '/home'},
        { to3: '/home'},
        {show:true},
        {num:''},
        {sum:true}

      ]
    };
  },
  methods: {},
  components: {
    Navigation,
    Foor
  },
//         beforeCreate(){
//             this.$router.push('/discover/find');
//         }
};
</script>

<style scoped lang="less">
.discover{
    font-size: 30px;
}
@r : 100rem;
.title{
    font-size: 0;
    height: 88/2/@r;
    width: 100%;
    border-bottom: 1px solid rgb(232,232,232);
    position: relative;
    a{
        display: inline-block;
        width: 60/2/@r;
        font-size: 30/2/@r;
        font-weight: 500;
        height: .3rem;
        
    }
    a:nth-child(1){
        position: absolute;
        left: 140/2/@r;
        top:15/@r;
        
    }
    a:nth-child(2){
        position: absolute;
        right: 140/2/@r;
        top:15/@r;
    }
    .router-link-active{
        border-bottom: 3px solid rgb(255,10,69);
        color: rgb(255,10,69);
    }
}
</style>