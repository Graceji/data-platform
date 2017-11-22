import request from './request'

function getTables (params) {
  return request.get(`/showdb/api/dictionary/${params.tableName}`, {
    ...params
  })
}

function getTableContent (params) {
  return request.get(`/showdb/api/dictionary/${params.tableUrl}/${params.tableName}`)
}

export default {
  getTables,
  getTableContent
}
