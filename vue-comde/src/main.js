//入口文件
// console.log('ok')
import Vue from 'vue'

//导入APP根组件
import  app from './App.vue'

//按需导入mnit-ui中的组件
import {Header,Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//全局注册，注册组件
Vue.component(Header.name,Header)

//导入mui 样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入自己的router.js路由模块
import router  from './router'

//导入vue-resource



var vm =new Vue({
  el:'#app',
  render: c =>c(app),
  router
})
