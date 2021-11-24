import axios from 'axios'

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