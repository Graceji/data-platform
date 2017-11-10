import request from './request'

function list ({ page, size, query, status, date, type }) {
  const params = { _page: page, _limit: size, q: query }
  if (status) {
    params.status = status
  }
  if (date && date.length === 2) {
    params.apply_date_gte = date[0]
    params.apply_date_lte = date[1]
  }
  if (type) {
    params.type = type
  }
  return request.get('/api/claims', params)
}

function subList (formObj) {
  return request.post('/api/claims', formObj)
}

function item (id) {
  return request.get(`/api/claims/${id}`)
}

function getDetail (id) {
  return request.get(`/api/claims/${id}`)
}

function changeEvent ({ id, eventId, data }) {
  return request.put(`/api/claims/${id}/events/${eventId}`, data)
}

export default {
  list,
  item,
  subList,
  changeEvent,
  getDetail
}
