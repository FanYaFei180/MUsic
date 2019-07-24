<template>
  <div>
    <div>
      <div class="lun">
        <div class="imgs">
          <div class="swiper-container">
            <div class="swiper-wrapper imgss">
              <div class="swiper-slide">
                <img src="./img-home/banner-1.png" alt>
              </div>
              <div class="swiper-slide">
                <img src="./img-home/pic-2 (2).png" alt>
              </div>
              <div class="swiper-slide">
                <img src="./img-home/pic.png" alt>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>

      <browse></browse>
      <div class="kong"></div>
      <section>
        <div class="sale">
          <div class="sale-img">
            <p>{{ sale[0] }}</p>
            <img :src="sale[1]">
          </div>
          <ul class="well">
            <li v-for="(item, index) in well" :key="index">
              <img :src="item.img" class="imgs">
              <p v-text="item.name" class="p1"></p>
              <p id="p">
                <img src="./img-home/icon-next.png" alt>
                <span v-text="item.age"></span>
              </p>
            </li>
          </ul>
        </div>
        <div class="kong"></div>
        <div class="sale">
          <div class="sale-img">
            <p>{{ song[0] }}</p>
            <img :src="song[1]">
          </div>
          <ul class="well">
            <li v-for="(item, index) in news" :key="index">
              <img :src="item.img" class="imgs">
              <p v-text="item.name" class="p1"></p>
              <p id="p">
                <img src="./img-home/icon-next.png" alt>
                <span v-text="item.age"></span>
              </p>
            </li>
          </ul>
        </div>
        <div class="kong"></div>
        <div class="sale">
          <div class="sale-img">
            <p>{{ dual[0] }}</p>
            <img :src="dual[1]">
          </div>
          <ul class="well">
            <li v-for="(item, index) in indiv" :key="index">
              <img :src="item.img" class="imgs">
              <p v-text="item.name" class="p1"></p>
              <p id="p">
                <img src="./img-home/icon-next.png" alt>
                <span v-text="item.age"></span>
              </p>
            </li>
          </ul>
        </div>
        <div class="kong"></div>
        <div class="sale">
          <div class="sale-img">
            <p>{{ Voice[0] }}</p>
            <img :src="Voice[1]">
          </div>
          <ul class="well">
            <li v-for="(item, index) in broadcast" :key="index">
              <img :src="item.img" class="imgs">
              <p v-text="item.name" class="p1"></p>
              <p id="p">
                <img src="./img-home/icon-next.png" alt>
                <span v-text="item.age"></span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import browse from "../../components/browse.vue";
export default {
  data() {
    return {
      sale: ["热销推荐", require("./img-home/icon-right.png")],
      well: [
        {
          img: require("./img-home/pic-2.png"),
          name: "2019最火歌曲",
          age: "13万"
        },
        {
          img: require("./img-home/pic-4.png"),
          name: "Bown For Life",
          age: "31万"
        },
        {
          img: require("./img-home/pic-6.png"),
          name: "这个世界中有一个人那么爱你",
          age: "131万"
        }
      ],
      song: ["新歌速递", require("./img-home/icon-right.png")],
      news: [
        {
          img: require("./img-home/pic-1.png"),
          name: "口哨专辑,中文必备",
          age: "41万"
        },
        {
          img: require("./img-home/pic-3.png"),
          name: "花粥 民谣女流氓",
          age: "18万"
        },
        {
          img: require("./img-home/pic-5.png"),
          name: "声色撩人/幻想男友音/晚安好梦",
          age: "19万"
        }
      ],
      dual: ["个性化推荐", require("./img-home/icon-right.png")],
      indiv: [
        {
          img: require("./img-home/1.png"),
          name: "国人纯音至美国音",
          age: "1931万"
        },
        {
          img: require("./img-home/5.png"),
          name: "青春不散场",
          age: "131万"
        },
        {
          img: require("./img-home/6.png"),
          name: "华语私人定制",
          age: "5万"
        }
      ],
      Voice: ["语音直播", require("./img-home/icon-right.png")],
      broadcast: [
        {
          img: require("./img-home/7.png"),
          name: "国人纯音至美国音",
          age: "6万"
        },
        {
          img: require("./img-home/2.png"),
          name: "青春不散场",
          age: "11万"
        },
        {
          img: require("./img-home/3.png"),
          name: "华语私人定制",
          age: "13万"
        }
      ]
    };
  },

  methods: {},
  components: {
      browse,
  }
};
</script>

<style scoped lang="less">
@r: 100rem;
.section {
  width: 100%;
  font-size: 0;
  .lun {
    width: 100%;
    display: flex;
    justify-content: center;
    .imgs {
      width: 685/2 / @r;
      height: 250/2 / @r;
      margin-top: 22/2 / @r;
      img {
        width: 685/2 / @r;
        height: 250/2 / @r;
      }
    }
  }
  .sale {
    background: #fff;
    .well {
      width: 685/2 / @r;
      display: flex;
      margin: auto;
      li {
        flex: 1;
        position: relative;
        .imgs {
          width: 220/2 / @r;
          height: 220/2 / @r;
        }
      }
      .p1 {
        width: 220/2 / @r;
        font-size: 24/2 / @r;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0.1rem 0rem 0.15rem 0rem;
      }
      #p {
        position: absolute;
        top: 0.06rem;
        right: 0.11rem;
        font-size: 0.12rem;
        color: #fff;
        img {
          width: 0.12rem;
          height: 0.12rem;
        }
      }
    }
    .sale-img {
      width: 685/2 / @r;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15/2 / @r auto;
      p {
        font-size: 32/2 / @r;
        color: #333333;
        font-weight: 500;
      }
      img {
        width: 32/2 / @r;
        height: 32/2 / @r;
      }
    }
  }
  .kong {
    width: 100%;
    height: 0.1rem;
    background-color: #fafafa;
  }
}
</style>
