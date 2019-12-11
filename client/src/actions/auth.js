import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL,
       USER_LOADED, AUTH_ERROR, LOGOUT, CLEAR_PROFILE} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

export const register = (formData) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    // const body = JSON.stringify({name, email, password});
    try{
        const res = await axios.post('/api/v1/signup', formData, config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch (setAlert('Account Created, you may login', 'success'));
            //  history.push('/login');
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:REGISTER_FAIL
        })
    }
}

export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password});
    try{
        const res = await axios.post('/api/v1/signin', body, config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch (loadUser())
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:LOGIN_FAIL
        })
    }
}

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try{
        const res = await axios.get('/api/v1/user');
        dispatch({
            type:USER_LOADED,
            payload: res.data
        })
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:AUTH_ERROR
        })
    }
}

export const logout = () => async dispatch => {
        dispatch({
            type:LOGOUT,
        })
}

 