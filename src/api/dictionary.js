import request from './request'

function getTables (params) {
  return request.get(`/showdb/dictionary/${params.tableName}`, {
    ...params
  })
}

function getTableContent (params) {
  return request.get(`/showdb/dictionary/${params.tableUrl}/${params.tableName}`)
}

export default {
  getTables,
  getTableContent
}
