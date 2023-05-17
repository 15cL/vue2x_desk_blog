
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加一个响应
request.interceptors.response.use(
  function (res) {
    return res
  },
  function (err) {
    return Promise.reject(err)
  }
)

export default request
