import { GET_LIST,ARTICLE_LIST } from './actionTypes'
import { http } from '@/utils/http'

/**
 * 获取科目分类列表
 * @returns 
 */
export const getChannelList = () => {
    return async(dispatch, getState) => {
        const res = await http.get(`/channels`)
        dispatch({type:GET_LIST,payload:res.channels})
    }
}

/**
 * 获取筛选文章列表
 * @param {*} reqParams 
 * @returns 
 */
export const getArticles = (reqParams) => {
    return async (dispatch, getState) => {
        const res = await http.get(`/mp/articles`,{params:reqParams})
        dispatch({type:ARTICLE_LIST, payload:res})
     }
}
