import axios from 'axios'
import { GETARTICLE_LIST } from './actionTypes'
const getArticleList = (activeId) => {
    return  async(dispatch) => { 
        const res = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${activeId}&timestamp=${Date.now()}`)
        dispatch({type:GETARTICLE_LIST,payload:res.data.data.results})
    }
}
 
export { 
    getArticleList
}