
import request from '@/utills/request'

export function getArticles () {
  return request({
    url: '/article/all',
    method: 'get'
  })
}
