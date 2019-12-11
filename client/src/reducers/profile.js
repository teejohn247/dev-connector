import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE,UPDATE_PROFILE, GET_PROFILES, DELETE_EDU, DELETE_EXP } from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    loading:true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case GET_PROFILES:
        return {
            ...state,
            profiles: payload,
            loading: false
        }
        case GET_PROFILE:
        case UPDATE_PROFILE:
        return {
            ...state,
            profile: payload,
            loading: false
        }
        case DELETE_EDU:
        return{
        ...state,
        profile: payload,
        loading: false
        }
        case PROFILE_ERROR:
        return {
            ...state,
            // profile: payload,
            loading: false
        }
        case CLEAR_PROFILE:
        return {
            ...state,
            profile: null,
            loading: false
        }
        default:
        return state;
    }
   
}