import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      count: 0,
      addressList: [],  //地址列表
      sign: "", //个性签名
      sex: "", //性别
      nickname: "", //昵称
      area: {
        region: "",
        province: "",
        city:"",
      },
      avatarsUrl: "", //头像
      bg_img_url: "", //背景图
  },
  getters: {
    getSex(state) {
      return state.sex  //存性别
    },
    getAddressList(state) {
      return state.addressList
    },
    get_count(state) {
      return state.count
    }
  },
  mutations: {
    set_bg(state, payload) {
      state.bg_img_url = payload  //存背景图
    },
    set_avatars(state, payload) {
      state.avatarsUrl = payload //存头像
    },
    set_area(state, payload) {
      state.area = payload  //存所在地
    },
    set_nickname(state, payload) {
      state.nickname = payload  //存昵称
    },
    set_sex(state, payload) {
      state.sex = payload   //存性别
    },
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
    SET_BG(context, payload) {  //存背景图地址
      context.commit("set_bg", payload)
    },
    SET_AVATARS_URL(context, payload) {
      context.commit("set_avatars", payload) //存头像
    },
    SET_AREA(context, payload) {
      context.commit("set_area", payload) //存所在地
    },
    SET_NICKNAME(context, payload) {
      context.commit("set_nickname", payload) //存昵称
    },
    SET_SEX(context, payload) {
      context.commit("set_sex", payload) //存性别
    },
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
    storage:window.localStorage
  })]
})

export default store