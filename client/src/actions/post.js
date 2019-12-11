import axios from 'axios';
import { GET_POSTS, POST_ERROR, PROFILE_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST, SET_ALERT, ADD_COMMENT, REMOVE_COMMENT} from "./types";
import { setAlert } from './alert';

export const getPosts = () => async dispatch => {
    const res = await axios.get('/api/v1/allposts');
    try{
    dispatch({
        type: GET_POSTS,
        payload: res.data
    });
} catch (err) {
    dispatch({
        type: POST_ERROR,
        payload:{ status: err.response.status}
    })
}
}
export const addLikes = (id) => async dispatch => {
    const res = await axios.post(`/api/v1/post/like/${id}`);
    try{
    dispatch({
        type: UPDATE_LIKES,
        payload: {id, likes:res.data}
    });
} catch (err) {
    dispatch({
        type: POST_ERROR,
        payload:{ status: err.response.status }
    })
}
}
export const singlePost = (id) => async dispatch => {
    const res = await axios.get(`/api/v1/allposts/${id}`);
    try{
    dispatch({
        type: GET_POST,
        payload: res.data
    });
} catch (err) {
    dispatch({
        type: POST_ERROR,
        payload:{ status: err.response.status}
    })
}
}
export const removeLikes = (id) => async dispatch => {
    const res = await axios.delete(`/api/v1/post/unlike/${id}`);
    try{
    dispatch({
        type: UPDATE_LIKES,
        payload: {id, likes:res.data}
    });
} catch (err) {
    dispatch({
        type: POST_ERROR,
        payload:{ status: err.response.status}
    })
}
}
export const addPost = (formData) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/v1/post', formData, config);
        dispatch({
            type:ADD_POST,
            payload: res.data
        })
        // dispatch (setAlert('profile created', 'success'));
            // history.push('/dashboard');
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                // setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}
export const addComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/v1/comment/${postId}`, formData, config);
        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        })
        // dispatch (setAlert('profile created', 'success'));
            // history.push('/dashboard');
    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(
                // setAlert(error.msg, 'danger')
        ))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}
export const deleteComment = (postId, commentId) => async dispatch => {
    const res = await axios.delete(`/api/v1/comment/${postId}/${commentId}`);
    try{
    dispatch({
        type: REMOVE_COMMENT,
        payload: res.data
    });
    dispatch(setAlert('Post removed', 'success'))
} catch (err) {
    dispatch({
        type: POST_ERROR,
        payload:{ status: err.response.status}
    })
}
}
export const deletePost = (id) => async dispatch => {
  await axios.delete(`/api/v1/del/post/${id}`);
    try{
    dispatch({
        type: DELETE_POST,
        payload: id
    });
    dispatch(setAlert('Post removed', 'success'))
} catch (err) {
    dispatch({
        type: POST_ERROR,
        payload:{ status: err.response.status}
    })
}
}