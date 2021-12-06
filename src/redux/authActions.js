/* eslint-disable prettier/prettier */
import * as Types from '../contants/ActionTypes'


export const authenticate=()=>{
    return {
        type:Types.AUTH_REQ
    }
}


export const authSuccess= (content)=>{
    localStorage.setItem('USER_KEY',content.token);
    return {
        type:Types.AUTH_SUCCESS,
        payload:content
    }
}

export const authFailure=(error)=>{
    return {
        type:Types.AUTH_FAILURE,
        payload:error
    }
}

