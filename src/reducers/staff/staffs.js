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
const staffs = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  var staff = action.staff
  switch (action.type) {
    case Types.FETCH_STAFF:
      state = action.staffs
      return [...state];
    case Types.DELETE_STAFF:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_STAFF:
      state.push(action.staff)
      return [...state];
    case Types.UPDATE_STAFF:
      index = findIndex(state, staff.id)
      state[index] = staff
      return [...state];
    default: return [...state];
  }
}
export default staffs;
