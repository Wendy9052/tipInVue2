import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      count: 0,
      addressList: [],  //地址列表
      sign: "", //个性签名
  },
  getters: {
    getAddressList(state) {
      return state.addressList
    },
    get_count(state) {
      return state.count
    }
  },
  mutations: {
    set_sign(state, payload) {
      state.sign = payload  //存个性签名
    },
    set_addressList(state, payload) { //存储地址列表
      state.addressList = payload
    },
    set_count(state, payload) {
      state.count = payload
    }
  },
  actions: {
    SET_SIGN(context, payload) {
      context.commit("set_sign", payload) //存个性签名
    },
    SET_ADDRESS_LIST(context, payload) {  
      context.commit("set_addressList", payload)  //存储地址列表
    },
    SET_COUNT(context, payload) {
      context.commit("set_count", payload)
    }
  },
  plugins: [persistedState({
    storage:window.sessionStorage
  })]
})

export default store