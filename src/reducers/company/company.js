/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState = [];
var findIndex = (company, id) => {
  var result = -1;
  company.forEach((companyItem, index) => {
    if (companyItem.id === id) {
      result = index;
    }
  })
  return result;
}
const allCompany = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  var company = action.company
  switch (action.type) {
    case Types.FETCH_COMPANY:
      state = action.allCompany
      return [...state];
    case Types.DELETE_COMPANY:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_COMPANY:
      state.push(action.company)
      return [...state];
    case Types.UPDATE_COMPANY:
      index = findIndex(state, company.id)
      state[index] = company
      return [...state];
    default: return [...state];
  }
}
export default allCompany;
