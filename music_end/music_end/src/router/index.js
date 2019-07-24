import Vue from 'vue';
import Router from 'vue-router';
import Home from '../conten/home/home.vue';
import Audio from '../conten/audio/audio.vue';
import Discover from '../conten/discover/discover.vue';
import Mine from '../conten/mine/mine.vue';
import Video from '../conten/video/video.vue';
import Station from '../conten/home/radioStation/station';
import Search from '../conten/home/search/search.vue';
import Sidebar from '../conten/sidebar/sidebar.vue';
//jinchengqin
import Find from '../conten/discover/find.vue';//关注
import Recommend from '../conten/discover/recommend.vue';//关注
import Album from '../conten/album/album.vue';
import Listening from '../conten/listening/listening.vue';
import Homepage from '../components/homepage/homepage.vue';
import Homepage2 from '../components/homepage/homepage2.vue';
import Guidepage from '../components/homepage/guidepage.vue';
import Login from '../conten/register/login.vue';
import Register from '../conten/register/register.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        
        {
          path: 'search',
          name: 'Search',
          component: Search,
        },
      ]
    },
    {
      path:'/album',
      name:'Album',
      component:Album
    },
    {
      path: '/station',
      name: 'station',
      component: Station,
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover,
      children:[
        {path:'find',component:Find},
        {path:'recommend',component:Recommend},
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/listening',
      name: 'Listening',
      component: Listening
    },
    {
      path: '/homepage2',
      name: 'Homepage2',
      component: Homepage2
    },
    {
      path: '/guidepage',
      name: 'Guidepage',
      component: Guidepage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },

  ],
})
