// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'

// 创建一个axios的实例
const service = axios.create({
  baseURL: 'http://ihrm-java.itheima.net', // 设置axios请求的基础的基础地址
  timeout: 5000 // 定义5秒超时
})

// service.interceptors.request.use() // 请求拦截器
// 响应拦截器
service.interceptors.response.use(response => {
  console.log('response', response)
  if (!response.data.success) {
    // 如果success为 false 业务错误，直接茶法reject 被catch分支捕获
    return Promise.reject(new Error(response.data.message))
  }
  // 操作成功
  return response.data
}, error => {
  return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
})

export default service // 导出axios实例
