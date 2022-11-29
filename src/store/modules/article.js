
import { getArticles, getHotArticles, getSearchAticles } from '@/api/article'

const state = {

}

const mutations = {

}

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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
