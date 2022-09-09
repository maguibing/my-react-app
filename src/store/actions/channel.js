import {GET_CHANNEL, CHANGE_ACTIVE } from './actionTypes'
import axios from 'axios'
const getChannel = () => { 
    return async (dispatch, getState) => { 
        const res = await axios.get('http://toutiao.itheima.net/v1_0/channels')
        dispatch({type:GET_CHANNEL,payload:res.data.data.channels})
    }
}


const chagneActive = (id) => ({type: CHANGE_ACTIVE, payload:id})

export {
    getChannel,
    chagneActive
 }