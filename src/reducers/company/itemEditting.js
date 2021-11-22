/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState={};
const itemEditting =(state=initialState, action)=>{
    switch (action.type) {
        case Types.EDIT_COMPANY:
            return action.company;
        default:
            return state;
    }
}
export default itemEditting;
