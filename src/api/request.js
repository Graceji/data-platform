import qs from 'qs'
import axios from 'axios'

const request = {}
const HOST = 'http://10.25.85.231:8092'
function handle (req) {
  return req.catch((err) => {
    const data = err.response && err.response.data
    if (data && data.message) {
      return Promise.reject(data)
    }
    return Promise.reject({
      status: 500,
      message: 'System error'
    })
  })
}

['get', 'delete', 'head'].forEach((method) => {
  request[method] = (url, data, config) => {
    const uri = `${HOST + url}?${qs.stringify(data)}`
    const req = axios[method](uri, config)
    return handle(req)
  }
});
['post', 'put', 'patch'].forEach((method) => {
  request[method] = (url, data) => {
    const uri = HOST + url + '/'
    const config = {
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
    }
    const req = axios[method](uri, qs.stringify(data), config)
    return handle(req)
  }
})

console.log(process.env)

export default request
