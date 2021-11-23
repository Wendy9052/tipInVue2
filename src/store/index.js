import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      count: 0,
      addressList: [],  //地址列表
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
    set_addressList(state, payload) {
      state.addressList = payload
    },
    set_count(state, payload) {
      state.count = payload
    }
  },
  actions: {
    SET_ADDRESS_LIST(context, payload) {
      context.commit("set_addressList", payload)
    },
    SET_COUNT(context, payload) {
      context.commit("set_count", payload)
    }
  }
})

export default store