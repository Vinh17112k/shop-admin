/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState = [];
var findIndex = (room, id) => {
  var result = -1;
  room.forEach((roomItem, index) => {
    if (roomItem.id === id) {
      result = index;
    }
  })
  return result;
}
const allRoom = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  var room = action.room
  switch (action.type) {
    case Types.FETCH_ROOM:
      state = action.allRoom
      return [...state];
    case Types.DELETE_ROOM:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_ROOM:
      state.push(action.room)
      return [...state];
    case Types.UPDATE_ROOM:
      index = findIndex(state, room.id)
      state[index] = room
      return [...state];
    default: return [...state];
  }
}
export default allRoom;
