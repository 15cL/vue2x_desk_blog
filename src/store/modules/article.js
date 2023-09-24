import {
  getArticleMsg,
  getArticles,
  getHotArticles,
  getSearchAticles,
  insertTraffic,
  getAvatar
} from '@/api/article'

const state = {
  flag: false,
  loadingFlag: true
}

const mutations = {
  setLoadingFlag (state) {
    state.loadingFlag = false
  }
}

const actions = {
  // 获取所有文章
  async getArticles (context, start = 0) {
    return await getArticles(start)
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
    return await insertTraffic(id)
  },

  // 获取文章大图
  async getAvatar (context, id) {
    return await getAvatar(id)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
