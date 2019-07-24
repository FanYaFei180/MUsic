<template>
  <div class="guidepage">
     <div class="guidepage-top">
       <p>听</p>
       <p>你</p>
       <p>所</p>
       <p>想</p>
     </div>
     <div class="guidepage-middle">
       <p>想</p>
       <p>你</p>
       <p>所</p>
       <p>听</p>
     </div>
     <div class="guidepage-bottom">
       <img src="./img/icon-01-2x.png">
       <p>麋途音乐</p>
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
  mounted(){
    setTimeout(()=>{
      window.location.href="http://localhost:8080/#/homepage2";
    },3000)
  },
  components: {

  }
}
</script>

<style scoped lang="less">
    @r:100rem;
    .guidepage{
        background: #fff;
       .guidepage-top{
          margin-top:130/2/@r;
          p{
            font-size: 50/2/@r;
            text-align: center;
            margin-top: 20/2/@r;
          }
    }
    .guidepage-middle{
        margin-top:50/2/@r;
        p{
            font-size: 50/2/@r;
            text-align: center;
            margin-top: 20/2/@r;
          }
      }
      .guidepage-bottom{
        margin-top: 250/2/@r;
        text-align: center;
        img{
          width: 110/2/@r;
          height: 110/2/@r;
        }
        p{
          margin-top: 16/2/@r;
          font-size: 50/2/@r;
          color: #FF5571;
        }
      }
    }
   
</style>
