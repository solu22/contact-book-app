import axios from 'axios'
import { FETCH_DATA_FAIL, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from '../constants'

export const fetchUser = ()=> async(dispatch, getState)=>{
    try {
        dispatch({
            type: FETCH_DATA_REQUEST
        })

        const {data} = axios.get('/api/v1/users', config)
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data

        })
    } catch (error) {
       dispatch({
           type: FETCH_DATA_FAIL,
           payload: error
       })        
    }
}