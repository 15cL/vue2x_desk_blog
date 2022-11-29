
import request from '@/utills/request'

export function getCates () {
  return request({
    url: '/cate/all',
    method: 'get'
  })
}

// 获取分类文章
export function getCateArticle (id) {
  return request({
    url: '/cate/article',
    params: {
      id: id
    },
    method: 'get'
  })
}
