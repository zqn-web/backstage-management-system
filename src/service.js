import axios from 'axios'

// 自定义配置新建一个实例
const service = axios.create({
  // baseURL会自动加在接口地址上
  // baseURL: 'http://demo.crudapi.cn/api/business',
  baseURL: '/api',
  // 指定请求毫秒数，如果请求超过这个时间，请求会中断
  timeout: 3000,
  headers: {
    'Content-type': 'application/json;charset=utf-8'
    // 'cookie': 'SESSION=MGEwOGZlNzMtZmRkNS00YTkxLWE2MmQtNjRmZDA4NTUzZWZl'
  },
  auth: {
    username: 'superadmin',
    password: '1234567890'
  }
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求前做写=些什么
  return config
}, function (error) {
  // 对请求错误，做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做些什么
  return response
}, function (error) {
  // 对响应错误做些什么
  return Promise.reject(error)
})

export default service
