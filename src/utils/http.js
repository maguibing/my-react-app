import axios from "axios";
import { getToken } from '@/utils/auth'

const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, e => Promise.reject(e))


// 响应拦截器
http.interceptors.response.use(res => {
    return res?.data?.data || res
  }, e => Promise.reject(e))
  
export { http }