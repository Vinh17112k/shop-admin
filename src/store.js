/* eslint-disable prettier/prettier */
import allCompany from './reducers/company/company'
import staffs from './reducers/staff/staffs'
import itemEditting from './reducers/company/itemEditting'
import staffEditting from './reducers/staff/staffEditting'
import itemStaffEditting from './reducers/staffBuilding/staffEditting'
import staffsBuilding from './reducers/staffBuilding/staffsBuilding'
import services from './reducers/serviceBuilding/services'
import serviceEditting from './reducers/serviceBuilding/serviceEditting'
import allContract from './reducers/contract/contract'
import contractEditting from './reducers/contract/contractEditting'
import auth from './redux/reducers/auth'
import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
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
  allCompany,
  itemEditting,
  staffs,
  staffEditting,
  services,
  serviceEditting,
  itemStaffEditting,
  staffsBuilding,
  allContract,
  contractEditting,
  auth
})
const store = createStore(appReducers,applyMiddleware(thunk))
export default store
