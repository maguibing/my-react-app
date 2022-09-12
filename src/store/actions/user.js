import { setToken as saveToken, clearToken } from '@/utils/auth'
import { SET_TOKEN,USER_INFO } from './actionTypes'
import { http } from '@/utils/http'

// 储存token
export const setToken = ({ mobile, code }) => { 
    return async (dispath) => {
        const res = await http.post(`/authorizations`, {  mobile,  code})
        const { token } = res
        dispath({ type: SET_TOKEN, payload: token })
        saveToken(token)
     }
}

/**
 * 获取个人信息
 */
export const getUserInfo = () => { 
    return async (dispatch,getState) => { 
        const res = await http.get(`/user/profile`)
        dispatch({ type: USER_INFO, name: res.name })
    }
}

/**
 * 退出登录
 */
export const logOut = () => {
    return (dispatch) => {
        clearToken()
        dispatch({type:SET_TOKEN,payload:""})
     }
}