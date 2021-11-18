import Vue from 'vue'
import Router from 'vue-router'

import message from '@/view/message'
import addressList from '@/view/addressList'
import find from '@/view/find'
import me from '@/view/me'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'message',
      component: message
    },
    {
      path: '/address_list',
      name: 'addressList',
      component: addressList
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
