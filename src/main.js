import Vue from 'vue'
import App from './App'
import router from './router'
import CircleMenu from 'vue-circle-menu'
import Vant from 'vant';
import 'vant/lib/index.css';
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './mock/mock.js'


Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.component('CircleMenu', CircleMenu)
Vue.use(Vant);
Vue.config.productionTip = false

const whiteList = [
  '/user/login'
]//no redirect whitelist

const handleRouter = (to, next) => {
  if (whiteList.includes(to.path)) {
    next('/')
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => {
  // 是否登录
  const isLogin = sessionStorage.getItem('isLogin')
  if(isLogin) {
    // 解决刷新后路由消失问题
    if(!store.state.routes.length) {
      store.dispatch("getRoleAction").then(res => {
        console.log(res) 
        // 解决动态添加路由 进入页面白屏 确保路由完整性，设置replace 为true 这样导航就不会留下历史记录
        next({...to, replace: true})
      })
    } else {
      handleRouter(to, next)
    }
  } else {
    if(whiteList.includes(to.path)) {
      // 用户访问的是登录或者注册页面 不需要拦截 直接放行
      next()
    } else {
      // next('/user/login')
      // 进入else分支说明用户访问的是有权限的页面, 先判断是否有token
      // 如果有token直接放行
      if (localStorage.getItem('token')) {
        next()
      } else {
        // 没有token拦截到登录页面让用户重新登录
        next({ path: '/user/login' })
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
