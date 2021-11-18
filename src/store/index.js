import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      count: 0 
  },
  getters: {
    get_count(state) {
      return state.count
    }
  },
  mutations: {
    set_count (state, payload) {
      state.count = payload
    }
  },
  actions: {
    SET_COUNT(context, payload) {
      context.commit("set_count", payload)
    }
  }
})

export default store