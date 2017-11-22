import request from './request'

function getPieData (data) {
  return request.get(`/showdb/api/getinccircle/${data}`)
}
function getBarData (data) {
  return request.get(`/showdb/api/getsum/${data}`)
}
function getLineData (data) {
  return request.get(`/showdb/api/getincline/${data}`)
}
export default {
  getPieData,
  getBarData,
  getLineData
}
