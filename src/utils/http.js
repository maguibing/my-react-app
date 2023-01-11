import axios from "axios";
import store from "@/store";
import { customHistory } from "./history";
import { logOut } from '@/store/actions/user'
import { getToken, clearToken } from '@/utils/auth'


const baseURL = process.env.REACT_APP_URL
const http = axios.create({
    baseURL,
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
}, e => { 
    if (e.response.status === 401) { 
        clearToken()
        store.dispatch(logOut())
        if (customHistory.location.pathname !== '/login') { 
            customHistory.push({
                pathname: "/login",
                state: {
                    from: customHistory.location.pathname
                }
            })
            window.location.reload()
        }
    }
  return Promise.reject(e)
})
  
export { http }