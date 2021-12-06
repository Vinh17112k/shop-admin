/* eslint-disable prettier/prettier */
import * as Types from '../contants/ActionTypes';
import callAPI from '../utils/callAPI';
export const actFetchAllCompanyRequest=()=>{
    return (dispatch)=>{
        return callAPI("GET", 'company', null).then(res=>{
            dispatch(actFetchAllCompany(res.data));
        })
    }
}
export const actFetchAllCompany =(allCompany)=>{
    return {
        type: Types.FETCH_COMPANY,
        allCompany
    }
}
//xoa tren server roi moi xoa tren store
export const actDeleteCompanyRequest=(id)=>{
    return (dispatch)=>{
        return callAPI("DELETE", `company/${id}`, null).then(res=>{
            dispatch(actDeleteCompany(id));
        })
    }
}
export const actDeleteCompany=(id)=>{
    return {
        type: Types.DELETE_COMPANY,
        id
    }
}
//them cong ty
export const actAddCompanyRequest=(company)=>{
    return (dispatch)=>{
        return callAPI("POST", 'company', company).then(res=>{
            dispatch(actAddCompany(res.data));
        })
    }
}
export const actAddCompany=(company)=>{
    return {
        type: Types.ADD_COMPANY,
        company
    }
}
export const actEditCompanyRequest=(id)=>{
    return (dispatch)=>{
        return callAPI("GET", `company/${id}`,null).then(res=>{
            dispatch(actEditCompany(res.data));
        })
    }
}
export const actEditCompany=(company)=>{
    return {
        type: Types.EDIT_COMPANY,
        company
    }
}
export const actUpdateCompanyRequest=(company)=>{
    return (dispatch)=>{
        return callAPI("PUT", `company/${company.id}`,company).then(res=>{
            dispatch(actUpdateCompany(res.data));
        })
    }
}
export const actUpdateCompany=(company)=>{
    return {
        type: Types.UPDATE_COMPANY,
        company
    }
}



//staffs
//fetchStaff
export const actFetchStaffsRequest=()=>{
  return (dispatch)=>{
      return callAPI("GET", 'staffs', null).then(res=>{
          dispatch(actFetchStaffs(res.data));
      })
  }
}
export const actFetchStaffs =(staffs)=>{
  return {
      type: Types.FETCH_STAFF,
      staffs
  }
}
//deleteStaff
export const actDeleteStaffRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("DELETE", `staffs/${id}`, null).then(res=>{
          dispatch(actDeleteStaff(id));
      })
  }
}
export const actDeleteStaff=(id)=>{
  return {
      type: Types.DELETE_STAFF,
      id
  }
}
//addStaff
export const actAddStaffRequest=(staff)=>{
  return (dispatch)=>{
      return callAPI("POST", 'staffs', staff).then(res=>{
          dispatch(actAddStaff(res.data));
      })
  }
}
export const actAddStaff=(staff)=>{
  return {
      type: Types.ADD_STAFF,
      staff
  }
}
//editStaff
export const actEditStaffRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("GET", `staffs/${id}`,null).then(res=>{
          dispatch(actEditStaff(res.data));
      })
  }
}
export const actEditStaff=(staff)=>{
  return {
      type: Types.EDIT_STAFF,
      staff
  }
}
//upDateStaff
export const actUpdateStaffRequest=(staff)=>{
  return (dispatch)=>{
      return callAPI("PUT", `staffs/${staff.id}`,staff).then(res=>{
          dispatch(actUpdateStaff(res.data));
      })
  }
}
export const actUpdateStaff=(staff)=>{
  return {
      type: Types.UPDATE_STAFF,
      staff
  }
}

//services
//fetchService
export const actFetchServicesRequest=()=>{
  return (dispatch)=>{
      return callAPI("GET", 'services/list', null).then(res=>{
          dispatch(actFetchServices(res.data));
      })
  }
}
export const actFetchServices =(services)=>{
  return {
      type: Types.FETCH_SERVICE,
      services
  }
}
//deleteService
export const actDeleteServiceRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("DELETE", `services/delete/${id}`, null).then(res=>{
          dispatch(actDeleteService(id));
      })
  }
}
export const actDeleteService=(id)=>{
  return {
      type: Types.DELETE_SERVICE,
      id
  }
}
//addService
export const actAddServiceRequest=(service)=>{
  return (dispatch)=>{
      return callAPI("POST", 'services', service).then(res=>{
          dispatch(actAddService(res.data));
      })
  }
}
export const actAddService=(service)=>{
  return {
      type: Types.ADD_SERVICE,
      service
  }
}
//editService
export const actEditServiceRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("GET", `services/${id}`,null).then(res=>{
          dispatch(actEditService(res.data));
      })
  }
}
export const actEditService=(service)=>{
  return {
      type: Types.EDIT_SERVICE,
      service
  }
}
//upDateService
export const actUpdateServiceRequest=(service)=>{
  return (dispatch)=>{
      return callAPI("PUT", `services/${service.id}`,service).then(res=>{
          dispatch(actUpdateService(res.data));
      })
  }
}
export const actUpdateService=(service)=>{
  return {
      type: Types.UPDATE_SERVICE,
      service
  }
}


//staffBuilding
//fetchStaffBuilding
export const actFetchStaffsBuildingRequest=()=>{
  return (dispatch)=>{
      return callAPI("GET", 'staffsbuilding', null).then(res=>{
          dispatch(actFetchStaffsBuilding(res.data));
      })
  }
}
export const actFetchStaffsBuilding =(staffsbuilding)=>{
  return {
      type: Types.FETCH_STAFFBUILDING,
      staffsbuilding
  }
}
//deleteStaff
export const actDeleteStaffBuildingRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("DELETE", `staffsbuilding/${id}`, null).then(res=>{
          dispatch(actDeleteStaffBuilding(id));
      })
  }
}
export const actDeleteStaffBuilding=(id)=>{
  return {
      type: Types.DELETE_STAFFBUILDING,
      id
  }
}
//addStaff
export const actAddStaffBuildingRequest=(staffBuilding)=>{
  return (dispatch)=>{
      return callAPI("POST", 'staffsbuilding', staffBuilding).then(res=>{
          dispatch(actAddStaffBuilding(res.data));
      })
  }
}
export const actAddStaffBuilding=(staffBuilding)=>{
  return {
      type: Types.ADD_STAFFBUILDING,
      staffBuilding
  }
}
//editStaff
export const actEditStaffBuildingRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("GET", `staffsbuilding/${id}`,null).then(res=>{
          dispatch(actEditStaffBuilding(res.data));
      })
  }
}
export const actEditStaffBuilding=(staffBuilding)=>{
  return {
      type: Types.EDIT_STAFFBUILDING,
      staffBuilding
  }
}
//upDateStaff
export const actUpdateStaffBuildingRequest=(staff)=>{
  return (dispatch)=>{
      return callAPI("PUT", `staffsbuilding/${staff.id}`,staff).then(res=>{
          dispatch(actUpdateStaffBuilding(res.data));
      })
  }
}
export const actUpdateStaffBuilding=(staffBuilding)=>{
  return {
      type: Types.UPDATE_STAFFBUILDING,
      staffBuilding
  }
}


//fetch contract
export const actFetchAllContractRequest=()=>{
  return (dispatch)=>{
      return callAPI("GET", 'contract', null).then(res=>{
          dispatch(actFetchContracts(res.data));
      })
  }
}
export const actFetchContracts =(contracts)=>{
  return {
      type: Types.FETCH_CONTRACT,
      contracts
  }
}
//delete contract
export const actDeleteContractRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("DELETE", `contract/${id}`, null).then(res=>{
          dispatch(actDeleteContract(id));
      })
  }
}
export const actDeleteContract=(id)=>{
  return {
      type: Types.DELETE_CONTRACT,
      id
  }
}
//add contract
export const actAddContractfRequest=(contract)=>{
  return (dispatch)=>{
      return callAPI("POST", 'contract', contract).then(res=>{
          dispatch(actAddContract(res.data));
      })
  }
}
export const actAddContract=(contract)=>{
  return {
      type: Types.ADD_CONTRACT,
      contract
  }
}
//editContract
export const actEditContractRequest=(id)=>{
  return (dispatch)=>{
      return callAPI("GET", `contract/${id}`,null).then(res=>{
          dispatch(actEditContract(res.data));
      })
  }
}
export const actEditContract=(contract)=>{
  return {
      type: Types.EDIT_CONTRACT,
      contract
  }
}
//upDateContract
export const actUpdateContractRequest=(contract)=>{
  return (dispatch)=>{
      return callAPI("PUT", `contract/${contract.id}`,contract).then(res=>{
          dispatch(actUpdateContract(res.data));
      })
  }
}
export const actUpdateContract=(contract)=>{
  return {
      type: Types.UPDATE_CONTRACT,
      contract
  }
}
