import API from '../api/dataCover'

export default {
  namespace: 'dataCover',
  state: {
    dataCover: null
  },
  getters: {
    dataCover: state => state.dataCover
    // usersMap: state => state.users.reduce((o, v) => {
    //   o[v.id] = v
    //   return o
    // }, {})
  },
  actions: {
    async getDataCover ({ commit }, params) {
      const { data } = await API.getDataCover(params)
      commit('dataCover/getDataCover', {
        dataCover: data
      })
      return data
    }
  },
  mutations: {
    getDataCover (state, { dataCover }) {
      state.dataCover = dataCover
    }
  }
}
