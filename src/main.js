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

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
