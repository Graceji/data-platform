import request from './request'
const feedback = params => {
  return request.post('/showdb/api/feedback', params)
}

export default {
  feedback
}
