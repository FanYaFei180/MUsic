<template>
  <div class="audio">
    <div>
      <router-link to="/home">
        <img src="./img-audio/aa2.png" alt>
      </router-link>

      <span>{{ audio.name }}</span>
      <router-link to="/home">
        <img src="./img-audio/aa3.png" alt>
      </router-link>
    </div>
    <p>
      {{ audio.singer }}
      <span>关注</span>
    </p>
    <p>
      <span>
        标椎
        <a href style="color:#fff">∨</a>
      </span>
      <span>MV</span>
      <span>音效</span>
    </p>
    <div class="audio_b">
      <img :class="{play_auto :bools }" :src="audio.pic" v-show="Lyric" @click="fn1">
      <div class="Lyric" v-show="!Lyric" @click="fn1">
        <p v-for="(item, index) in gess" :key="index" class="p1">{{ item.text }}</p>
      </div>
    </div>
    <p class="audio_y">
      <span :class="Lyric?'span1':'span2'"></span>
      <span :class="Lyric?'span2':'span1'"></span>
    </p>
    <div id="footer">
      <div class="list1">
        <ul>
          <li @click="!shows">
            <img src="./img-audio/q1.png" v-if="shows">
            <img src="./img-audio/1.png" alt v-else>
          </li>
          <li>
            <img src="./img-audio/q2.png" alt>
          </li>
          <li>
            <img src="./img-audio/q3.png" alt>
          </li>
          <li>
            <img src="./img-audio/q4.png" alt>
          </li>
          <li>
            <img src="./img-audio/q5.png" alt>
          </li>
        </ul>
      </div>
      <div class="rouen">
        <p class="jp-current-time" ref="current">00:00</p>
        <div class="jp-progress" ref="progress">
          <div class="jp-progress" ref="progress">
            <div class="jp-seek-bar" style="width: 100%;" ref="seek">
              <div class="jp-play-bar" style="width: 0%;" ref="play">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <p class="jp-duration" ref="duration">{{ audio.time | dateformat('MM:ss') }}</p>
      </div>
      <div class="list2">
        <ul>
          <li>
            <img src="./img-audio/w1.png" alt>
          </li>
          <li>
            <img src="./img-audio/w2.png" alt>
          </li>
          <li @click="play">
            <img class="play" src="./img-audio/w3.png" v-if="bool">
            <img class="play" src="./img-audio/ww3.png" v-else>
          </li>
          <li>
            <img src="./img-audio/w4.png" alt>
          </li>
          <li>
            <img src="./img-audio/w5.png" alt>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <audio ref="name" :src="audio.url" controls autoplay hidden="true" id="audio"></audio>
    </div>
    <!-- <Alibum @par="msg" style="display:none;"></Alibum> -->
  </div>
</template>

<script>
// import Alibum from '../album/album.vue';
import Lyric from "lrc-file-parser";
export default {
  data() {
    return {
      bool: false,
      active: true,
      audio: "",
      Lyric: true,
      bools: true,
      lrc: "", //歌词地址
      ges: "", //歌词
      gess: [],
      shows: true,
      time: 400 ,//总时间
      // sss:''
    };
  },
  methods: {
    // msg(val){
    //   this.sss = val;
    //   this.lrc = val.lrc;
    //   console.log(val);
    // },
    play() {
      this.bool = !this.bool;
      this.bools = !this.bools;
      if (!this.bool) {
        this.$refs.name.play();
        // setInterval(() => {
        //   Lyric.margin - top - 0.1;
        // }, 100);
      } else {
        this.$refs.name.pause();
      }
    },
    fn1() {
      this.Lyric = !this.Lyric;
    },
  },
  components: {
    // Alibum,
  },
  created() {
    this.$http
      .get(
        "https://v1.itooi.cn/tencent/topList?&id=26&pageSize=15&page=0&format=1"
      )
      .then(response => {
        this.audio = response.data.data[0];
        this.lrc = response.data.data[0].lrc;
        this.time = this.audio.time;
        console.log(this.audio);
      })
      .catch(error => {
        console.log(error);
      });
    setTimeout(() => {
      this.$http
        .get(this.lrc)
        .then(res => {
          this.ges = res.data;
          console.log(this.ges);
        })
        .catch(err => {
          console.log(err);
        });
    }, 200);
  },
  mounted() {
    setTimeout(() => {
      console.log(this.gess);
      let this_ = this;
      var lrc = new Lyric({
        onPlay: function(line, text) {
          console.log(line, text);
        },
        onSetLyric: function(lines) {
          // 监听歌词设置事件。当设置歌词时，歌词解析完毕会触发此回调。
          // console.log(lines);
          this_.gess = lines;
          console.log(this_.gess[0].text);
          console.log(this_.gess.text);
          // lines 是一个数组[{time,text}]，
          // 里面包含播放时间及对应的歌词文本。
        },
        offset: 150 // 歌词偏移时间单位毫秒, 默认 190 ms
      });

      lrc.setLyric(this_.ges); // 设置歌词，此处传入lrc文件的文本内容
      // 注意：设置歌词将自动暂停歌词播放
      lrc.play(30); // 播放歌词，传入开始播放时间，30000是播放时间，单位：ms
      lrc.pause(3000); // 暂停播放歌词
    }, 500);
  },
  // updated() {
  //   setTimeout(()=>{
  //      msg(val);
  //   },700)
   
  // },
};
</script>

<style scoped lang="less">
@r: 100rem;

#add {
  width: 100%;
  height: 100%;
}
.audio {
  width: 100%;
  height: 100%;
  background: url("./img-audio/aa1.png") no-repeat center center;
  background-size: cover;
  font-size: 40/2 / @r;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
  div:first-of-type {
    width: 100%;
    height: 110/2 / @r;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:first-of-type {
      margin-left: 32/2 / @r;
      img {
        width: 40/2 / @r;
        height: 40/2 / @r;
      }
    }
    a:last-of-type {
      margin-right: 32/2 / @r;
      img {
        width: 40/2 / @r;
        height: 40/2 / @r;
      }
    }
  }
  p:first-of-type {
    margin-top: 10/2 / @r;
    margin-left: 60/2 / @r;
    font-size: 30/2 / @r;
    span {
      font-size: 24/2 / @r;
      padding: 4/2 / @r 14/2 / @r;
      border: 1px solid #fff;
      border-radius: 6/2 / @r;
      margin-left: 0.05rem;
    }
  }
  p:nth-of-type(2) {
    margin-top: 15/2 / @r;
    font-size: 40/2 / @r;
    span {
      font-size: 24/2 / @r;
      padding: 6/2 / @r 20/2 / @r;
      border: 1px solid #fff;
      border-radius: 10/2 / @r;
    }
  }
  .audio_b {
    .Lyric {
      display: flex;
      flex-direction: column;
      width: 3rem;
      font-size: 0.12rem;
      line-height: 0.3rem;
      height: 3.5rem;
      margin: 0.5rem auto;
      text-align: center;
      overflow: hidden;
      overflow-y: visible;
      .p1 {
        display: block;
        text-align: center;
        font-size: 0.2rem;
        color: #fff;
        animation: myMove 150s linear infinite;
        animation-fill-mode: forwards;
      }
    }
    @keyframes myMove {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-1000px);
      }
    }
    img {
      width: 236 / @r;
      height: 236 / @r;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 88 / @r;
      margin-bottom: 1.2rem;
    }
    @keyframes rotateImg {
      0% {
        transform: rotateZ(0deg) scale(1);
      }
      25% {
        transform: rotateZ(90deg) scale(0.95);
      }
      50% {
        transform: rotateZ(180deg) scale(1);
      }
      75% {
        transform: rotateZ(270deg) scale(0.95);
      }
      100% {
        transform: rotateZ(360deg) scale(1);
      }
    }
    .play_auto {
      animation: rotateImg 7s linear infinite;
    }
  }

  .audio_y {
    position: absolute;
    bottom: 0.2rem;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: inline-block;
      width: 20/2 / @r;
      height: 20/2 / @r;
      border-radius: 50%;
      margin: 0 10/2 / @r;
    }
    .span1 {
      background-color: #fff;
    }
    .span2 {
      background-color: #999;
    }
  }
  #footer {
    // z-index: 10000;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: rgb(91, 124, 100);
    .list1 {
      width: 100%;
      height: 45/2 / @r;
      margin-top: 20/2 / @r;
      ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        li {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 44/2 / @r;
          }
        }
      }
    }
    .rouen {
      width: 100%;
      height: 44/2 / @r;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        width: 530/2 / @r;
        height: 1px;
        background-color: #fff;
        p {
          width: 16/2 / @r;
          height: 16/2 / @r;
          border-radius: 50%;
          background-color: rgb(243, 8, 8);
          margin: -5/2 / @r;
          margin-left: 10/2 / @r;
        }
      }
      p {
        font-size: 24/2 / @r;
        margin: 22/2 / @r;
      }
    }
    .list2 {
      width: 100%;
      height: 100/2 / @r;
      margin-bottom: 14/2 / @r;
      ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 44/2 / @r;
          }
          .play {
            width: 90/2 / @r;
          }
        }
      }
    }
  }
}
</style>
