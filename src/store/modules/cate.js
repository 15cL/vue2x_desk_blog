import { getCates } from '@/api/cate'

const state = {

}

const mutations = {

}

const actions = {
  async getCates () {
    return await getCates()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
