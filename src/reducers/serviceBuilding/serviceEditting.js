/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState={};
const serviceEditting =(state=initialState, action)=>{
    switch (action.type) {
        case Types.EDIT_SERVICE:
            return action.service;
        default:
            return state;
    }
}
export default serviceEditting;
