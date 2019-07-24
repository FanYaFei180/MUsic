<template>
  <div class="album">
    <div class="block"></div>
    <div class="top">
      <div class="top_album">
        <a href="javaSxript:;">
          <router-link to="/home">
            <img src="./img/icon-back.png">
          </router-link>
        </a>
        专辑
      </div>
      <!-- 歌手介绍 -->
      <div class="singer">
        <a href="javaScript:;">
          <img src="./img/tou@2x.png">
        </a>
        <div class="singer_cen">
          <h3>Why-The 2nd MiNi Altum</h3>
          <p>歌手：金泰妍</p>
          <div>
            <span>发行时间：2018:09.09</span>
            <br>
            <span>“信听女主”泰妍的特别夏之礼...</span>
          </div>
        </div>
      </div>
      <ul class="song_mess">
        <li>
          <a href="javaScript:;">
            <img src="./img/ICON-NEWS.png">
            <span>消息</span>
          </a>
        </li>
        <li>
          <a href="javaScript:;">
            <img src="./img/ICON-LIKE (1).png">
            <span>喜欢</span>
          </a>
        </li>
        <li>
          <a href="javaScript:;">
            <img src="./img/ICON-Share.png">
            <span>评论</span>
          </a>
        </li>
        <li>
          <a href="javaScript:;">
            <img src="./img/ICON-DOWNLOAD.png">
            <span>下载</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="play">
      <div class="play_top">
        <a href="javaScript:;" @click="paly_all">
          <img src="./img/play-01.png">
          <span>播放全部</span>
        </a>
        <p>收藏(120)</p>
      </div>
      <ul class="play_list">
        <li v-for="(item,index) in arr" :key="index">
          <a href="javaScript:;" @click="fanplay(index)">
            <span>{{index+1}}</span>
            <div>
              <p>
                {{item.name}}
                <img src="./img/SQ.png">
              </p>
              <span>{{item.singer}}</span>
            </div>
            <a href="javaScript:;">
              <img src="./img/icon-more.png">
            </a>
          </a>
        </li>
        <!-- <li>
            <a href="javaScript:;">
              <span>2</span>
             <div>
               <p>纪念<img src="./img/SQ.png" ></p>
              <span>RAINBOW计划/雷雨心-橙</span>
             </div>
             <a href="javaScript:;"><img src="./img/icon-more.png" ></a>
            </a>
          </li>
           <li>
            <a href="javaScript:;">
              <span>3</span>
             <div>
               <p>公子向北走<img src="./img/HQ.png" ></p>
              <span>西彬-公子向北走</span>
             </div>
             <a href="javaScript:;"><img src="./img/icon-more.png" ></a>
            </a>
          </li>
           <li>
            <a href="javaScript:;">
              <span>4</span>
             <div>
               <p>不露声色<img src="./img/HQ.png" ></p>
              <span>Jam-不露声色</span>
             </div>
             <a href="javaScript:;"><img src="./img/icon-more.png" ></a>
            </a>
        </li>-->
      </ul>
    </div>
    <!-- 底部 -->
    <!-- <router-link to="/audio"></router-link> -->
    <div class="paly_bottom">
      
        <a href="javaScript:;">
         <router-link to="/audio">  <img :src="thr_shu.src"></router-link>
         
          <div>
            <p>{{thr_shu.name}}</p>
            <span>{{thr_shu.sings}}</span>
          </div>

          <a href="javaScript:;" @click="fnis_play " class="play_butt">
            <img src="./img/play-02.png" v-if="is_play">
            <img src="./img/icon暂停.png" v-else>
          </a>
        </a>
      

      <audio :src="thr_shu.cen_src" ref="audio" controls hidden id="audio"></audio>
      <!-- <audio  id="audio" :src="cen_src">
      </audio>-->
    </div>
  </div>
</template>

<script>
import Axios from "../../../node_modules/axios/dist/axios.js";
export default {
  data() {
    return {
      arr: [],
      is_play: true,
      thr_shu: {
        src:
          "https://y.gtimg.cn/music/photo_new/T002R300x300M0000021N8xr0xq1Fp.jpg?max_age=2592000",
        sings: "Ice paper",
        name: "心如止水",
        cen_src: "https://v1.itooi.cn/tencent/url?id=003ebMYY2PGmn6",
        lrc: "https://v1.itooi.cn/tencent/lrc?id=003ebMYY2PGmn6"
      }
    };
  },
  mounted() {
    Axios.get(
      "https://v1.itooi.cn/tencent/topList?&id=26&pageSize=15&page=0&format=1"
    )
      .then(response => {
        console.log(response);
        this.arr = response.data.data;
        return this.arr.splice(0, 5);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    fanplay(index) {
      this.thr_shu.cen_src = this.arr[index].url;
      this.thr_shu.name = this.arr[index].name;
      this.thr_shu.sings = this.arr[index].singer;
      this.thr_shu.src = this.arr[index].pic;
      this.thr_shu.lrc = this.arr[index].lrc;
      let audio = document.getElementById("audio");
      audio.addEventListener("canplay", () => {
        audio.play();
        this.is_play = false;
      });
    },
    fnis_play() {
      this.is_play = !this.is_play;
      if (this.is_play) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
    },
    paly_all() {
      this.thr_shu.cen_src = this.arr[0].url;
      this.thr_shu.name = this.arr[0].name;
      this.thr_shu.sings = this.arr[0].singer;
      this.thr_shu.src = this.arr[0].pic;
      this.thr_shu.lrc = this.arr[0].lrc;
      let audio = document.getElementById("audio");
      audio.addEventListener("canplay", () => {
        audio.play();
        this.is_play = false;
      });
    }
  },
  components: {},
  updated() {
    // setTimeout(() => {
    // this.$emit("par", this.thr_shu);
    // }, 500);
  }
};
</script>

<style scoped lang='less'>
@r: 100rem;
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.album {
  padding-top: 0.14rem;
  font-size: 0.2rem;
  position: relative;
  background: -webkit-linear-gradient(left, #ffab97, #ff0a49);
  .block {
    z-index: 0;
    width: 100%;
    height: 3rem;
    position: absolute;
    left: 0;
    background: url("./img/矢量智能对象@2x(7).png") 1.5rem 0.2rem no-repeat;
    background-size: 2.3rem;
  }
  .top {
    padding: 0 0.14rem;
    position: relative;
    .top_album {
      font-size: 38/2 / @r;
      color: #fcfbfb;
      text-align: center;
      overflow: hidden;
      a {
        float: left;
        img {
          width: 44/2 / @r;
        }
      }
    }
    .singer {
      margin-top: 0.17rem;
      overflow: hidden;
      img {
        width: 300/2 / @r;
        height: 280/2 / @r;
        float: left;
      }
      .singer_cen {
        margin-left: 0.1rem;
        float: left;
        color: #fcfbfb;
        h3 {
          font-size: 30/2 / @r;
          margin: 0.1rem 0;
        }
        p {
          font-size: 27/2 / @r;
        }
        div {
          margin: 0.3rem 0 0.1rem;
          span {
            font-size: 27/2 / @r;
          }
        }
      }
    }
    .song_mess {
      display: flex;
      margin: 0.14rem 0;
      li {
        flex: 1;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 44/2 / @r;
          }
          span {
            font-size: 28/2 / @r;
            color: #fcfbfb;
          }
        }
      }
    }
  }
  .play {
    background: #fff;
    padding: 0.14rem;
    padding-bottom: 0;
    border-radius: 0.3rem 0.3rem 0 0;
    position: relative;
    .play_top {
      overflow: hidden;
      a {
        height: 0.3rem;
        display: inline-block;
        img {
          margin-right: 0.04rem;
          width: 30/2 / @r;
          vertical-align: middle;
        }
        span {
          font-size: 32/2 / @r;
          color: #333;
        }
      }
      p {
        float: right;
        display: inline-block;
        background: rgb(255, 11, 68);
        color: #fbfafa;
        font-size: 27/2 / @r;
        width: 150/2 / @r;
        height: 60/2 / @r;
        text-align: center;
        line-height: 60/2 / @r;
        border-radius: 0.25rem;
      }
    }
    .play_list {
      display: flex;
      margin-top: 0.1rem;
      flex-direction: column;
      li {
        flex: 1;
        padding: 0.15rem 0;
        a {
          display: flex;
          align-items: center;
          span {
            font-size: 30/2 / @r;
            color: #999;
            flex: 1;
          }
          div {
            flex: 17;
            p {
              font-size: 29/2 / @r;
              color: #333;
              img {
                margin-left: 0.1rem;
                width: 35/2 / @r;
                height: 20/2 / @r;
                vertical-align: middle;
              }
            }
            span {
              font-size: 27/2 / @r;
              color: #999;
            }
          }
          a {
            flex: 1;
            // margin-left:.1rem;
            img {
              width: 8/2 / @r;
              height: 36/2 / @r;
            }
          }
        }
      }
    }
  }
  .paly_bottom {
    background: #fff;
    padding: 6/2 / @r 0.14rem;
    border-top: 1px solid rgb(232, 232, 232);
    position: fixed;
    bottom: 0;
    width: 100%;
    a {
      display: flex;
      align-items: center;
      margin-top: 0.04rem;
      img {
        flex: 1;
        width: 80/2 / @r;
      }
      div {
        flex: 7;
        margin-left: 20/2 / @r;
        p {
          font-size: 0.17rem;
          color: #333;
        }
        span {
          font-size: 0.14rem;
          color: #999;
        }
      }
      .play_butt {
        z-index: 6;
        flex: 1;
        display: inline-block;
        height: 0.3rem;
        img {
          z-index: 6;
          width: 48/2 / @r;
          margin-right: 0.38rem;
        }
      }
    }
  }
}
</style>
