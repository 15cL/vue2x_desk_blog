
import request from '@/utills/request'

export function getCates () {
  return request({
    url: '/cate/all',
    method: 'get'
  })
}
