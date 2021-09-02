import {LOGIN_SUCCESS, LOGIN_FAILURE} from './type'



const login = token => async dispatch =>{
try {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: token
    })
} catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message })
}
}