import axios from 'axios'
import { FETCH_DATA_FAIL, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT} from '../constants'

const url = '/api/v1/users'

export const fetchContact = ()=> async(dispatch)=>{
    try {
        dispatch({
            type: FETCH_DATA_REQUEST
        })

        const {data} = await axios.get(url)
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

export const addContact = (name, number)=> async(dispatch)=>{
    try {
        const {data} = await axios.post(url,{name, number})
        dispatch({
            type: ADD_CONTACT,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}



export const removeContact = (id)=> async(dispatch)=>{
    try{
         await axios.delete(`${url}/${id}`)
            dispatch({
                type: REMOVE_CONTACT,
                payload:id
            })
        }
    
    catch(error){
        console.log(error)
    }
}

export const updateContact = (user)=> async(dispatch)=>{
    try{
        const {data} = await axios.put(`${url}/${user._id}`, user)
        dispatch({
            type: UPDATE_CONTACT,
            payload: data
        })
    }
    catch(error){
        console.log(error)
    }
}