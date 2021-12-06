/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState={};
const contractEditting =(state=initialState, action)=>{
    switch (action.type) {
        case Types.EDIT_CONTRACT:
            return action.contract;
        default:
            return state;
    }
}
export default contractEditting;
