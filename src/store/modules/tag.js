import { getTags } from '@/api/tag'

const state = {

}

const mutations = {

}

const actions = {
  async getTags () {
    return await getTags()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
