import axios from 'axios'

export function DynamicMsg(data) {
  return axios.get("/dynamic",data)
}

// 获取头像列表
export function getData(data) {
  return axios.get("/getDataList", data)
}