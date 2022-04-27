/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import allCategory from './reducers/category/category'
import itemCategory from './reducers/category/itemCategory'
import auth from './reducers/login/auth'
import itemProduct from './reducers/product/itemProduct'
import allProduct from './reducers/product/product'
import search from './reducers/search/search'
const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}
const appReducers = combineReducers({
  changeState,
  allProduct,
  allCategory,
  itemCategory,
  itemProduct,
  auth,
  search
})
const store = createStore(appReducers,applyMiddleware(thunk))
export default store
