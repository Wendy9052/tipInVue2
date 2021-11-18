import Vue from 'vue'
import App from './App'
import router from './router'
// import Vue from 'vue'
import CircleMenu from 'vue-circle-menu'
Vue.component('CircleMenu', CircleMenu)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
