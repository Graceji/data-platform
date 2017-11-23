import request from './request'

function getDataCover (params) {
  return request.post('/showdb/api/datacover', params)
}

export default {
  getDataCover
}
