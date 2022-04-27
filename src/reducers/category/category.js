/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState = [];
var findIndex = (category, id) => {
  var result = -1;
  category.forEach((categoryItem, index) => {
    if (categoryItem.id === id) {
      result = index;
    }
  })
  return result;
}
const allCategory = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  var category = action.category
  switch (action.type) {
    case Types.FETCH_CATEGORY:
      state = action.allCategory
      return [...state];
    case Types.DELETE_CATEGORY:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_CATEGORY:
      state.push(action.category)
      return [...state];
    case Types.UPDATE_CATEGORY:
      index = findIndex(state, category.id)
      state[index] = category
      return [...state];
    default: return [...state];
  }
}
export default allCategory;
