import request from '@/utills/request'

// 获取所有标签
export function getTags () {
  return request({
    url: '/tag/all',
    method: 'get'
  })
}

// 获取标签内的文章
export function getTagArticle (id) {
  return request({
    url: '/tag/article',
    params: {
      id
    },
    method: 'get'
  })
}
