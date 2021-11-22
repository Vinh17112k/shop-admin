/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState = [];
var findIndex = (services, id) => {
  var result = -1;
  services.forEach((service, index) => {
    if (service.id === id) {
      result = index;
    }
  })
  return result;
}
const services = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  switch (action.type) {
    case Types.FETCH_SERVICE:
      state = action.services
      return [...state];
    case Types.DELETE_SERVICE:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_SERVICE:
      state.push(action.service)
      return [...state];
    case Types.UPDATE_SERVICE:
      index = findIndex(state, action.service.id)
      state[index] = action.service
      return [...state];
    default: return [...state];
  }
}
export default services;
