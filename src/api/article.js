
import request from '@/utills/request'

// 获取所有文章
export function getArticles () {
  return request({
    url: '/article/all',
    method: 'get'
  })
}

// 获取热门文章
export function getHotArticles () {
  return request({
    url: '/article/hot',
    method: 'get'
  })
}

// 搜索文章
export function getSearchAticles (info) {
  return request({
    url: '/article/search',
    params: {
      info
    },
    method: 'get'
  })
}
