import API from '../api/user'

export default {
  namespace: 'user',
  state: {
    user: null
  },
  getters: {
    user: state => state.user
    // usersMap: state => state.users.reduce((o, v) => {
    //   o[v.id] = v
    //   return o
    // }, {})
  },
  actions: {
    async getUser ({ commit }, params) {
      const { data } = await API.getUser(params)
      commit('user/getUserDone', {
        user: data
      })
      return data
    }
  },
  mutations: {
    getUserDone (state, { user }) {
      state.user = user
    }
  }
}
