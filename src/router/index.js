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
import personal from '@/view/me/personal.vue'
import qr_card from '@/view/me/qr_card.vue'
import more_msg from '@/view/me/more_msg.vue'

import chat from '@/view/message/chat.vue'
import chatDetail from '@/view/message/chatDetail.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  
      name: 'message',  
      component: message  //聊天列表
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
      component: addressList  //通讯录列表
    },
    {
      path: '/find',
      name: 'find',
      component: find //发现页
    },
    {
      path: '/me',
      name: 'me',
      component: me //我的页面
    },
    {
      path: '/me/store',
      name: 'store',
      component: store  //收藏
    },
    {
      path: '/me/share_place',
      name: 'share_place',
      component: share_place  //咖咖圈页面
    },
    {
      path: '/me/card',
      name: 'card',
      component: card  //卡包
    },
    {
      path: '/me/expression',
      name: 'expression',
      component: expression //表情
    },
    {
      path: '/me/payment',
      name: 'payment',
      component: payment  //支付
    },
    {
      path: '/me/set',
      name: 'set',
      component: set  //设置
    },
    {
      path: '/me/personal',
      name: 'personal',
      component: personal  //个人信息
    },
    {
      path: '/me/qr_card',
      name: 'qr_card',
      component: qr_card  //二维码名片
    },
    {
      path: '/me/more_msg',
      name: 'more_msg',
      component: more_msg  //更多信息
    }
  ]
})
