<template>
  <div class='radio'>
    <header>
      <router-link to="/home"><img src='./img/top-icon-01@2x.png'> </router-link> 
       <span>电台</span>
       <span></span>
    </header>
    <main>
       <nav>
          <ul id='list'>
            <li v-for='(item,index) in list' :key='index' @click='dj(index)'>
              <a :class='{color:item.xs}'>
                 {{item.title}} 
                 <!-- <span class='lx' v-show='item.xs'></span> -->
              </a>
            </li>
          </ul>
       </nav>
       <div class='photo'>
         <ul>
            <li>
              <a>
                <img src='./img/picture-01@2x.png' class='pic'/>
                <p class='text'>猜你喜欢</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>18.2万</span>
                </p>
              </a>
            </li> 
            <li>
              <a>
                <img src='./img/picture-02@2x.png' class='pic'/>
                <p class='text'>热歌</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>15.4万</span>
                </p>
              </a>
            </li>
         </ul> 

         <ul>
          
            <li>
              <a>
                <img src='./img/picture-03@2x.png' class='pic'/>
                <p class='text'>粤语</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>16.4万</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <img src='./img/picture-04@2x.png' class='pic'/>
                <p class='text'>新歌</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>19.5万</span>
                </p>
              </a>
            </li>
         </ul> 

         <ul>
            <li>
              <a>
                <img src='./img/picture-05@2x.png' class='pic'/>
                <p class='text'>民谣</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>12.2万</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <img src='./img/picture-06@2x.png' class='pic'/>
                <p class='text'>小语种</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>18.6万</span>
                </p>
              </a>
            </li>
         </ul>

         <ul> 
            <li>
              <a>
                <img src='./img/picture-07@2x.png' class='pic'/>
                <p class='text'>欧美</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>16.4万</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <img src='./img/picture-08@2x.png' class='pic'/>
                <p class='text'>爵士</p>
                <p class='num'>
                  <img src='./img/icon-02@2x.png'/>
                  <span>11.4万</span>
                </p>
              </a>
            </li>                
         </ul>
       </div>
    </main>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              list:[
                {'title':'热门','xs':true},
                {'title':'凌晨','xs':false},
                {'title':'主题','xs':false},
                {'title':'场景','xs':false},
                {'title':'语种','xs':false},
                {'title':'曲风','xs':false},
                {'title':'人群','xs':false},
                {'title':'乐器','xs':false},
                {'title':'FM','xs':false},
                {'title':'情感','xs':false},
                {'title':'原创','xs':false},
                {'title':'翻唱','xs':false},
              ]
            }
        },
        methods: {
           dj(index){
              for(let i in this.list){
                 this.list[i].xs=false;
              }
              this.list[index].xs=true;
           } 
        },
        components: {

        }
    }
   
</script>

<style scoped lang='less'>
    .radio {
        background:url('./img/banner.png') no-repeat center center;
        background-size:100% 101%;
        margin-bottom:-15px;
        padding-left:.3rem;
        padding-right:.3rem;
    //     // 头部
        header{
          height:.77rem;
          text-align:center;
          overflow:hidden;
          padding-top:.3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .36rem;
          color: #000;
          img{
            width:.4rem;
            height:.4rem;
          }
        }
    //     // 主体
        main{
          // margin-top:-.4rem;
        //  position:relative;
            //  left:-.5rem;
    //       // 左导航
        
          display:flex;
          justify-content:space-between;
          nav{
             font-size:.28rem;
              
             ul{
               list-style:none;
              
               li{
                 margin-top:.5rem;
                 .color{
                   color:rgb(2,89,85);
                    border-color: rgb(2,89,85);

                 }
                 a{
                   color:rgb(170,168,156);
                   padding-bottom: .05rem;
                   border-bottom: .04rem solid  transparent;
                   .lx{
                     display:inline-block;
                     width:1rem;
                     height:.05rem;
                     background: rgb(2,89,85);
                     position:relative;
                     top:.15rem;
                    margin-left:-.25rem;
                   }
                 }
               }
                
             }
          }
          // 图片
          .photo{
            margin-top: .45rem;
             padding-bottom: 1rem;
            ul{
              list-style:none;
              display:flex;
              flex-wrap:no-wrap;
              justify-content:space-between;
              height:2.7rem;
              position:relative;
               left:-.3rem;
              li:nth-child(1){
                margin-right:.2rem;
              }
              li{
                position: relative;
                a{
                  position:relative;
                   .pic{
                     width:2.5rem;
                     height:2.5rem;
                   }
                   .text{
                  font-size:.25rem;
                  color:#fff;
                  position:absolute;
                  // top:0rem;
                  // left:.9rem;
                  z-index: 8888;
                  bottom: .9rem;
                  width: 2rem;
                  left: .83rem;
                  bottom: .53rem;
                }
              

                .num{
                  position:absolute;
                  top:-1.03rem;
                  span{
                    font-size:.23rem;
                    color:#fff;
                    margin-left:-.2rem;
                    display: block;
                    width: 1.02rem;
                    margin: .33rem 0 0 .63rem;
                  }
                  img{
                    width:.4rem;
                    height:.4rem;
                    margin-left:.2rem;
                    position:relative;
                    top:.65rem;
                  }
                }
                }
                
              }
            }
          }
        }

    }
   
   
</style>