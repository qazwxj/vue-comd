import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContanier from './components/tabbar/MemberContanier.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContanier},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer}
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，
  //默认的类叫做ruter-link-active
})

// 把路由对象暴露出去
export default router 