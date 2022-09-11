import { ADD_NUM, DEL_NUM } from '../constant/types'
 
export const add = item => dispatch => {
    dispatch({
        type: ADD_NUM,
        payload: item
    })
}
 
export const del = item => dispatch => {
    dispatch({
        type: DEL_NUM,
        payload: item
    })
}