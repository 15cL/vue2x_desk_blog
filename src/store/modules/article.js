import {
  getArticleMsg,
  getArticles,
  getHotArticles,
  getSearchAticles,
  insertTraffic
} from '@/api/article'

const state = {}

const mutations = {}

const actions = {
  // 获取所有文章
  async getArticles () {
    return await getArticles()
  },

  // 获取热门文章
  async getHotArticles () {
    return await getHotArticles()
  },

  // 搜索文章
  async getSearchAticles (context, info) {
    return await getSearchAticles(info)
  },

  // 获取文章下留言
  async getArticleMsg (context, id) {
    return await getArticleMsg(id)
  },

  // 计算文章流量
  async insertTraffic (context, id) {
    console.log('id')
    return await insertTraffic(id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
