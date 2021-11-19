import Vue from 'vue'
import Router from 'vue-router'

import message from '@/view/message'
import addressList from '@/view/addressList'
import find from '@/view/find'
import me from '@/view/me'
import store from '@/view/me/store'
import share_place from '@/view/me/share_place'
import card from '@/view/me/card'
import expression from '@/view/me/expression'
import payment from '@/view/me/payment'
import set from '@/view/me/set'
import chat from '@/view/message/chat.vue'
import chatDetail from '@/view/message/chatDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'message',
      component: message
    },
    {
      path: '/message/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/message/chatDetail',
      name: 'chatDetail',
      component: chatDetail
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
    },
    {
      path: '/me/store',
      name: 'store',
      component: store
    },
    {
      path: '/me/share_place',
      name: 'share_place',
      component: share_place
    },
    {
      path: '/me/card',
      name: 'card',
      component: card
    },
    {
      path: '/me/expression',
      name: 'expression',
      component: expression
    },
    {
      path: '/me/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/me/set',
      name: 'set',
      component: set
    }
  ]
})
