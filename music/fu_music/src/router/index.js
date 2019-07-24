import Vue from 'vue'
import Router from 'vue-router'
import Home from '../router/shouye/Home.vue'
import Focus from '../components/focus_nearby/focus/Focus.vue'
import Nearby from '../components/focus_nearby/nearby/Nearby.vue'
import tuijian from '../router/tuijian/tuijian'
import radio from '../router/radio/radio'
import zhuan from '../router/zhuanji/zhuanji.vue'
import sousuo from '../router/sousuo'
import music from '../router/tinggeshiqu'
import mine from '../router/mine'
import paihangbang from '../router/running.vue'
import intro from '../components/intro.vue'
import intros from '../components/intros.vue'
import oudio from '../components/audio.vue' 
import logon from '../components/logon.vue'
import  sum from '../components/sum/sum.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {path:'/',name:'sum',component:sum},
    {path: '/',name: 'intro',component:intro},
    {path: '/intro',name: 'intro',component:intro},
    {path: '/intros',name: 'intros',component: intros},
    {path: '/logon',name: 'logon',component: logon},
    {path: '/oudio',name: 'oudio',component: oudio},
     {path: '/home',name: 'Home',component:Home,
     children:[
      {path:'/home/',name:'tuijian',component:tuijian},
      {path:'/home/tuijian',name:'tuijian',component:tuijian}
    ]
  },
     {path:'/zhuan',name:'zhuan',component:zhuan},
     {path:'/radio',name:'radio',component:radio},
     {path:'/sousuo',name:'sousuo',component:sousuo},
     {path:'/music',name:'music',component:music},
     {path:'/mine',name:'mine',component:mine},
     {path:'/running',name:'paihangbang',component:paihangbang},
    {path: '/focus',name: 'Focus',component:Focus},
    {path: '/nearby',name: 'Nearby',component:Nearby}
  ]
})
