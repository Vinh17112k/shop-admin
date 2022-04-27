/* eslint-disable prettier/prettier */
import * as Types from '../../contants/ActionTypes';
var initialState = [];
var findIndex = (product, id) => {
  var result = -1;
  product.forEach((productItem, index) => {
    if (productItem.id === id) {
      result = index;
    }
  })
  return result;
}
const allProduct = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  var index = -1;
  var id = action.id;
  var product = action.product
  switch (action.type) {
    case Types.FETCH_PRODUCT:
      state = action.allProduct
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, id)
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.product)
      return [...state];
    case Types.UPDATE_PRODUCT:
      index = findIndex(state, product.id)
      state[index] = product
      return [...state];
    default: return [...state];
  }
}
export default allProduct;
