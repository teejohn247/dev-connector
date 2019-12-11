import axios from 'axios';
import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE,GET_PROFILES, DELETE_EDU, DELETE_EXP } from './types';
import { setAlert } from './alert';

export const getProfiles = () => async dispatch => {
    dispatch({type: CLEAR_PROFILE})
    try{
        const res = await axios.get('/api/v1/all');
        dispatch({
            type:GET_PROFILES,
            payload: res.data
        })
    } catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload: {error: err.response.error, status: err.response.status}
        })
    }
}

export const getProfileById = (userId) => async dispatch => {
    try{
        const res = await axios.get(`/api/v1/specific/${userId}`);
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        })
    } catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload: {error: err.response.error, status: err.response.status}
        })
    }
}

export const getCurrentProfile = () => async dispatch => {
    //  dispatch({type: CLEAR_PROFILE})
    try{
        const res = await axios.get('/api/v1/profile/me');
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        })
    } catch(err){
    // dispatch({type: CLEAR_PROFILE})
        dispatch({
            type:PROFILE_ERROR,
            payload: {error: err.response.error, status: err.response.status}
        })
    }
}
export const createProfile = (formData, history, edit=false) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/v1/profile', formData, config);
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        })
        dispatch (setAlert(edit ? 'profile updated' : 'profile created', 'success'));
            history.push('/dashboard');
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}
export const addEducation = (formData, history) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/v1/edu', formData, config);
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        })
        dispatch (setAlert('Experience Added', 'success'));
             history.push('/dashboard');
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.msg, status:err.response.status}
        })
    }
}

export const addExperience = (formData, history) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/v1/exp', formData, config);
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        })
        history.push('/dashboard');
        dispatch (setAlert('Education Added', 'success'));
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.msg, status:err.response.status}
        })
    }
}

export const deleteEdu = (edu_id) => async dispatch => {
    try{
         const res = await axios.delete(`api/v1/edu/del/${edu_id}`);
        dispatch({
            type:DELETE_EDU,
            payload: res.data
        })
        dispatch (setAlert('Successfully deleted', 'success'));
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.msg, status:err.response.status}
        })
    }
}

export const deleteExp = (exp_id) => async dispatch => {
    try{
         const res = await axios.delete(`api/v1/exp/del/${exp_id}`);
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        })
        dispatch (setAlert('Successfully deleted', 'success'));
    }catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.msg, status:err.response.status}
        })
    }
}

 