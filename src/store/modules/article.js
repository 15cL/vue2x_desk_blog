import { addArticle, delArticle, getArticleList, updateArticle } from '@/api/article'

const state = {}

const mutations = {}

const actions = {

  // 获取所有文章
  async getArticleList () {
    return await getArticleList()
  },

  // 删除文章
  async delArticle (context, id) {
    return await delArticle(id)
  },

  // 更新文章
  async updateArticle (context, data) {
    return await updateArticle(data)
  },

  // 新增文章
  async addArticle (constext, data) {
    return await addArticle(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
