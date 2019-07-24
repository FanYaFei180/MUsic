// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './../static/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)　　
Vue.config.productionTip = false
// import touch from '../static/js/zepto.touch';
// $.fn.touch.defaults = {
//     fingers: 1,
//     threshold: 75,
//     longTapThreshold: 500,
//     doubleTapThreshold: 200,
//     excludedElements: 'label, button, input, select, textarea, .noTouch',
//     pageScroll: true,
//     swipeMove: null
// };
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
