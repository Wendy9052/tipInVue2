import axios from 'axios'

// 获取头像列表
export function getData(data) {
  return axios.get("/getDataList", data)
}