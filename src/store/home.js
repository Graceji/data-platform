import API from '../api/home'

export default {
  namespace: 'home',
  state: {
    pieData: [],
    barData: [],
    lineData: []
  },
  getters: {
    pieData: state => state.pieData,
    barData: state => state.barData,
    lineData: state => state.lineData
  },
  actions: {
    async getPieData ({ commit }, { value }) {
      const { data } = await API.getPieData(value)
      commit('home/getPieDataDone', {
        pieData: data
      })
      return data
    },
    async getBarData ({ commit }, { value }) {
      const { data } = await API.getBarData(value)
      commit('home/getBarDataDone', {
        barData: data
      })
      return data
    },
    async getLineData ({ commit }, { value }) {
      const { data } = await API.getLineData(value)
      commit('home/getLineDataDone', {
        lineData: data
      })
      return data
    }
  },
  mutations: {
    getPieDataDone (state, { pieData }) {
      state.pieData = pieData
    },
    getBarDataDone (state, { barData }) {
      state.barData = barData
    },
    getLineDataDone (state, { lineData }) {
      state.lineData = lineData
    }
  }
}
