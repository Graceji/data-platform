import API from '../api/dictionary'

const dic = {
  'smdbgbgg': '对应股本与公告',
  'smdbgszk': '公司状况',
  'smdbhghy': '宏观行业',
  'smdbcwbb': '财务报表',
  'smdbdebt': '债券',
  'smdbqz': '权证'
}

export default {
  namespace: 'dictionary',
  state: {
    tables: [],
    tableContent: []
  },
  getters: {
    tables: state => state.tables,
    tableContent: state => state.tableContent
  },
  actions: {
    async getTables ({ commit }, params) {
      let { data } = await API.getTables(params)
      if (params.tableName === 'smdb') {
        data.forEach((item, index) => {
          item.name = dic[item.name]
        })
      }
      commit('dictionary/getTablesDone', data)
    },
    async getTableContent ({ commit }, params) {
      const { data } = await API.getTableContent(params)
      commit('dictionary/getTableContentDone', data)
    }
  },
  mutations: {
    getTablesDone (state, data) {
      state.tables = data
    },
    getTableContentDone (state, data) {
      state.tableContent = data
    }
  }
}
