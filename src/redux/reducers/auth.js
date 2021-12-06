/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';

const initialState={
    user:{},
    error:'',
    loading:false
};



const auth=(state=initialState,action)=>{
    console.log("Reducer auth");
    switch(action.type){
        case Types.AUTH_REQ:
            return {...state,error:'',loading:true};

        case Types. AUTH_SUCCESS:
            const data=action.payload;
            return {...state,error:'',loading:false,user:data};

        case Types.AUTH_FAILURE:
            const error=action.payload;
            return {...state,loading:false,error:error};

        default:
            return state;
    }
}


export default auth;
