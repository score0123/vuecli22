// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {InputNumber,Input,Layout,Slider,DataPicker,Rate,Breadcrumb,Carousel} from "element-ui"
Vue.use(ElementUI)

import Vant from 'vant';
import 'vant/lib/index.css';
import {Cell,Switch,Button,Toast,Popup,Uploader,PullRefresh,CountDown,Circle,Swipe,Lazyload,Image as VanImage} from 'vant';
Vue.use(Vant);

// import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
// Vue.use(Mint);

// axios
import axios from './api'//好像是你api文件夹下的js文件只要导出了，不管js文件名是什么都可以省略js文件名的路径，直接写到文件夹名就可以
Vue.prototype.axios=axios;
// import axios from 'axios';
// console.log("axios:",axios);

//Vuex
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  data:{
    isShow:true,
    userInfo:{}
  },
  components: { App },
  mounted(){
    console.log("this:",this);
  },
  template: '<App/>'
})



// 这是app组件     root组件 / 根组件