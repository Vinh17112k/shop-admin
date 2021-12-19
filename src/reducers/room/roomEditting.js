/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState={};
const roomEditting =(state=initialState, action)=>{
    switch (action.type) {
        case Types.EDIT_ROOM:
            return action.room;
        default:
            return state;
    }
}
export default roomEditting;
