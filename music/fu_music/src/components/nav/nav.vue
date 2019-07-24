<template>
  <div>
    <div class="nav">
      <span @click="gg"></span>
      <ul>
        <li :class="ind==inde?'active':''" @click="ind=inde" v-for="(item,inde) in list" :key="inde">
          <router-link :to='item.uri'>{{item.dast}}</router-link>
          <p></p>
        </li>
        <!-- <li>
          <router-link to='/mine'>我的</router-link>
          <p></p>
        </li>
        <li class="active">
          <router-link to="/home">音乐馆</router-link>
          
          <p></p>
        </li>
        <li>
          <router-link to="/focus">发现</router-link>
          <p></p>

        </li> -->
      </ul>
      <router-link to='/sousuo'>
       <!-- <span @click="serch"></span> -->
      </router-link>
      
    </div>
  </div>  
</template>

<script>
export default {
  name: 'nav_',
  data () {
    return {
      msg:0,
      ind:0,
      list:[{dast:'我的',uri:'/mine'},{dast:'音乐馆',uri:'/home'},{dast:'发现',uri:'/focus'}]
    }
  },
  mounted () {
    
  },
  methods: {
    gg(){
      this.msg++;
      this.$emit("getdata",this.msg);
    },
    serch(){
      // this.$router.push()
    },
    // tar(e){
    //   let list=document.querySelectorAll(".nav li");
    //   list.forEach((item,inde)=>{
    //     item.className='';
    //   })
    //  e.target.className="active";
    //  console.log(e.target);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@activecloor:#025955;
  .nav{
    margin-top: .4rem;
    height: .78rem;
    margin-bottom: .04rem;
    line-height: .78rem;
    padding: 0 .32rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ul{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
      li{
        font-size: .33rem;
        width: .99rem;
        box-sizing: border-box;
        background-color: transparent;
        border-radius: 5px;
        a{
        font-size: .33rem;
        width: .99rem;
        box-sizing: border-box;
        background-color: transparent;
        border-radius: 5px;
        background-image:none;
        }
        p{
          height: .08rem;
          border-radius: .04rem;
        }
        &:nth-of-type(2){
          margin: 0 .96rem;
        }
        &.active{
          color: @activecloor;
          p{
            background-color: @activecloor;
          }
        }
      }
    }
    span{
      display: inline-block;
      width: .44rem;      
      height: .44rem;
      &:nth-of-type(1){
        background: url('./image/seting.png') no-repeat center center;
      background-size: cover ;
      }
      
    }
    a{
      
      display: inline-block;
      width: .44rem;      
      height: .44rem;
        background: url('./image/top-02@2x.png') no-repeat center center;
       background-size: cover ;
      }
  }
</style>
