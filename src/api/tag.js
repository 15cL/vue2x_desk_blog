
import request from '@/utills/request'

export function getTags () {
  return request({
    url: '/tag/all',
    method: 'get'
  })
}
