/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState={};
const itemCategory =(state=initialState, action)=>{
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}
export default itemCategory;
