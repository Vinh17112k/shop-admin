/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState={};
const itemStaffEditting =(state=initialState, action)=>{
    switch (action.type) {
        case Types.EDIT_STAFFBUILDING:
            return action.staffBuilding;
        default:
            return state;
    }
}
export default itemStaffEditting;
