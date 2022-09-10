import { setToken as saveToken } from '@/utils/auth'
import { SET_TOKEN } from './actionTypes'
import { http } from '@/utils/http'

// 储存token
export const setToken = ({ mobile, code }) => { 
    return async (dispath) => {
        const res = await http.post(`/authorizations`, {  mobile,  code})
        console.log(res);
        const { token } = res
        dispath({ type: SET_TOKEN, payload: token })
        saveToken(JSON.stringify(token))
     }
}