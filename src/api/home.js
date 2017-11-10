import request from './request'

function getPieData (data) {
  return request.get(`/showdb/getinccircle/${data}`)
}
function getBarData (data) {
  return request.get(`/showdb/getsum/${data}`)
}
function getLineData (data) {
  return request.get(`/showdb/getincline/${data}`)
}
export default {
  getPieData,
  getBarData,
  getLineData
}
