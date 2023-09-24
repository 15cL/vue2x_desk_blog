
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://39.105.171.221:3000/',
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
