import request from './request'

function getUser (params) {
  return request.post('/showdb/api/getUser', params)
}

export default {
  getUser
}
