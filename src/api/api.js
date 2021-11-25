import axios from 'axios'

// 生成消息
export function createMsg(data) {
  return axios.get('/create_msg',data)
}

// 获取联系人列表
export function relationList(data) {
  return axios.get('/relation_list',data)
}

// 获取大区列表
export function getArea(data) {
  return axios.get('/area_region',data)
}

// 获取动态列表数据
export function DynamicMsg(data) {
  return axios.get("/dynamic",data)
}

// 获取头像列表
export function getData(data) {
  return axios.get("/getDataList", data)
}