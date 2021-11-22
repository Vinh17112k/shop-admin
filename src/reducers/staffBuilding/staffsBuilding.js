/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState = [];
var findIndex = (staffs, id) => {
  var result = -1;
  staffs.forEach((staff, index) => {
    if (staff.id === id) {
      result = index;
    }
  })
  return result;
}
const staffsBuilding = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  var staff = action.staffBuilding
  switch (action.type) {
    case Types.FETCH_STAFFBUILDING:
      state = action.staffsbuilding
      return [...state];
    case Types.DELETE_STAFFBUILDING:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_STAFFBUILDING:
      state.push(action.staffBuilding)
      return [...state];
    case Types.UPDATE_STAFFBUILDING:
      index = findIndex(state, staff.id)
      state[index] = staff
      return [...state];
    default: return [...state];
  }
}
export default staffsBuilding;
