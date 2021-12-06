/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState = [];
var findIndex = (contract, id) => {
  var result = -1;
  contract.forEach((contractItem, index) => {
    if (contractItem.id === id) {
      result = index;
    }
  })
  return result;
}
const allContract = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  var contract = action.contract
  switch (action.type) {
    case Types.FETCH_CONTRACT:
      state = action.allContract
      return [...state];
    case Types.DELETE_CONTRACT:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_CONTRACT:
      state.push(action.contract)
      return [...state];
    case Types.UPDATE_CONTRACT:
      index = findIndex(state, contract.id)
      state[index] = contract
      return [...state];
    default: return [...state];
  }
}
export default allContract;
