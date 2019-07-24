<template class="sidebar">
  <div>
    <transition name="asd">
      <div class="side" v-show="isactive">
        <router-link to="/home">
        <div class="right_y" @click="gn" v-show="isactive"></div>
        </router-link>
        
        <div class="init">
          <div class="header">
            <div class="bg">
              <div class="goto">
                <router-link to="/home">
                  <img src="./img-sidebar/icon-calendar.png" @click="gn">
                </router-link>
                <span>打卡</span>
              </div>
              <div class="people_h">
                <div>
                  <router-link to="/mine">
                    <img src="./img-sidebar/head-1.png">
                  </router-link>
                  <div>
                    <p>夏天的猫</p>
                    <p class="em">
                      <i>LV5</i>
                    </p>
                  </div>
                </div>
                <div>
                  <img src="./img-sidebar/QR.png">
                </div>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="nav">
              <ul>
                <li>
                  <router-link to="/home/sidebar">
                    <img src="./img-sidebar/icon-1.png" alt>
                    <p>我的消息</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">
                    <img src="./img-sidebar/icon-2.png" alt>
                    <p>我的好友</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">
                    <img src="./img-sidebar/icon-3.png" alt>
                    <p>个性皮肤</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">
                    <img src="./img-sidebar/icon-4.png" alt>
                    <p>会员中心</p>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="set">
              <ul>
                <li>
                  <router-link to="/home/sidebar">附近的人</router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">定时开关</router-link>
                  <div class="tog">
                    <p @click="togger" :class="{togger:bool}"></p>
                  </div>
                </li>
                <li>
                  <router-link to="/home/sidebar">音效设置</router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">音乐闹铃</router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">联通免流量</router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">帮助和反馈</router-link>
                </li>
                <li>
                  <router-link to="/home/sidebar">关于</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="s-footer">
            <ul>
              <li>
                <router-link to="/home/sidebar">
                  <img src="./img-sidebar/icon-5.png" alt>
                  <span>夜间模式</span>
                </router-link>
              </li>
              <li>
                <router-link to="/home/sidebar">
                  <img src="./img-sidebar/icon-6.png" alt>
                  <span>设置</span>
                </router-link>
              </li>
              <li @click="alerts">
                <router-link to="/home">
                  <img src="./img-sidebar/icon-7.png" alt>
                  <span>退出</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: false,
      isactive: true,
      diss: true
    };
  },
  methods: {
    togger() {
      this.bool = !this.bool;
    },
    gn(e) {
      event.stopPropagation();
      this.isactive = false;
      // this.diss=!this.diss;
    },
    alerts() {
      // alert("你确定要离开了吗？")
    }
  },
  components: {}
};
</script>

<style scoped lang=less>
@r: 100rem;
.asd-enter-active {
  animation: bounce-in 0.5s reverse;
}
.asd-leave-active {
  animation: bounce-in 0.7s ease-out;
}
@keyframes bounce-in {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-750/2 / @r);
  }
}
.side {
  z-index: 1000;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  position: absolute;
  top: 0;
  /* transition: all 5s; */
  .right_y {
    width: 20%;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .init {
    width: 80%;
    height: 100%;
    background-color: #fff;
    .header {
      width: 100%;
      background: linear-gradient(to right, #ffa091, #ff0e47);
      font-size: 28/2 / @r;
      color: #fff;
      .bg {
        width: 100%;
        height: 100%;
        background: url("./img-sidebar/lu.png") no-repeat right top;
        background-size: 80%;
        .goto {
          padding: 32/2 / @r;
          display: flex;
          align-items: center;
          a {
            img {
              width: 44/2 / @r;
              height: 44/2 / @r;
            }
          }
          span {
            margin-left: 20/2 / @r;
          }
        }
        .people_h {
          width: 100%;
          padding: 64/2 / @r 32/2 / @r 32/2 / @r 32/2 / @r;
          display: flex;
          div:first-of-type {
            overflow: hidden;
            img {
              width: 120/2 / @r;
              float: left;
            }
            div {
              float: left;
              margin-left: 20/2 / @r;
              p {
                font-size: 30/2 / @r;
                margin: 10/2 / @r;
                &.em {
                  border: 2px solid #fff;
                  border-radius: 15px;
                  background-color: #fff;
                  color: #ff0e47;
                  font-weight: 800;
                  font-size: 30/2 / @r;
                  text-align: center;
                  padding: 0;
                  font-family: "Helvetica";
                }
              }
            }
          }
          div:last-of-type {
            margin-left: 220/2 / @r;
            img {
              width: 44/2 / @r;
              height: 44/2 / @r;
            }
          }
        }
      }
    }
    .section {
      width: 100%;
      background-color: #fff;
      font-size: 28/2 / @r;
      .nav {
        ul {
          display: flex;
          padding: 60/2 / @r 0;
          li {
            width: 25%;
            a {
              display: flex;
              flex-direction: column;
              align-items: center;
              color: #333333;
              img {
                width: 44/2 / @r;
                margin-bottom: 30/2 / @r;
              }
            }
          }
        }
      }
      .set {
        ul {
          padding: 0 30/2 / @r;
          li {
            padding-bottom: 40/2 / @r;
            overflow: hidden;
            a {
              color: #333333;
            }
            .tog {
              float: right;
              width: 66/2 / @r;
              height: 30/2 / @r;
              border-radius: 15/2 / @r;
              border: 1px solid #ee3460;
              position: relative;
              p {
                width: 30/2 / @r;
                height: 30/2 / @r;
                background-color: #ff0e47;
                border-radius: 50%;
              }
              .togger {
                position: absolute;
                right: 0;
              }
            }
          }
        }
      }
    }
    .s-footer {
      width: 100%;
      position: fixed;
      bottom: 0;
      border-top: 1/2 / @r solid #999;
      ul {
        display: flex;

        li {
          padding: 26/2 / @r;
          a {
            color: #333333;
            font-size: 28/2 / @r;
            display: flex;
            align-items: center;
            img {
              width: 48/2 / @r;
              height: 48/2 / @r;
              margin-right: 20/2 / @r;
            }
          }
        }
      }
    }
  }
}
</style>

