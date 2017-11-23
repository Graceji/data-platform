import request from './request'

function getDataCover (params) {
  return request.post('/showdb/api/dataCover', params)
}

export default {
  getDataCover
}
