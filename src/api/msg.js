import request from '@/utills/request'

// 发送留言
export function sendMsg (data) {
  return request({
    url: '/msg/add',
    data,
    method: 'post'
  })
}

// 获取所有留言
export function getAllMsg () {
  return request({
    url: '/msg/all',
    method: 'get'
  })
}
