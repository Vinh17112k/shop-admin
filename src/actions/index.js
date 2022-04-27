/* eslint-disable prettier/prettier */
import * as Types from '../contants/ActionTypes';
import callAPI from '../utils/callAPI';
import axios from 'axios';
import { axiosAuthen } from 'src/utils/axiosAuthen';
//product
export const actFetchAllProductRequest=()=>{
  return (dispatch)=>{
      return axiosAuthen.get('api/product/getAll', null).then(res=>{
          dispatch(actFetchAllProduct(res.data));
      })
  }
}
export const actFetchAllProduct =(allProduct)=>{
  return {
      type: Types.FETCH_PRODUCT,
      allProduct
  }
}
//xoa tren server roi moi xoa tren store
export const actDeleteProductRequest=(id)=>{
  return (dispatch)=>{
      return axiosAuthen.delete(`api/product/delete/${id}`, null).then(res=>{
          dispatch(actDeleteProduct(id));
      })
  }
}
export const actDeleteProduct=(id)=>{
  return {
      type: Types.DELETE_PRODUCT,
      id
  }
}
//them cong ty
export const actAddProductRequest=(product)=>{
  return (dispatch)=>{
      return axiosAuthen.post('api/product/create', product).then(res=>{
          dispatch(actAddProduct(res.data));
      })
  }
}
export const actAddProduct=(product)=>{
  return {
      type: Types.ADD_PRODUCT,
      product
  }
}
export const actEditProductRequest=(id)=>{
  return (dispatch)=>{
      return axiosAuthen.get(`api/product/${id}`,null).then(res=>{
          dispatch(actEditProduct(res.data));
      })
  }
}
export const actEditProduct=(product)=>{
  return {
      type: Types.EDIT_PRODUCT,
      product
  }
}
export const actUpdateProductRequest=(product)=>{
  return (dispatch)=>{
      return axiosAuthen.put(`api/product/update/${product.id}`,product).then(res=>{
          dispatch(actUpdateProduct(res.data));
      })
  }
}
export const actUpdateProduct=(product)=>{
  return {
      type: Types.UPDATE_PRODUCT,
      product
  }
}
//category

export const actFetchAllCategoryRequest=()=>{
  return (dispatch)=>{
      return axiosAuthen.get('api/admin/category/getAll', null).then(res=>{
          dispatch(actFetchAllCategory(res.data));
      })
  }
}
export const actFetchAllCategory =(allCategory)=>{
  return {
      type: Types.FETCH_CATEGORY,
      allCategory
  }
}
//xoa tren server roi moi xoa tren store
export const actDeleteCategoryRequest=(id)=>{
  return (dispatch)=>{
      return axiosAuthen.delete(`api/admin/category/delete/${id}`, null).then(res=>{
          dispatch(actDeleteCategory(id));
      })
  }
}
export const actDeleteCategory=(id)=>{
  return {
      type: Types.DELETE_CATEGORY,
      id
  }
}
//them danh muc
export const actAddCategoryRequest=(category)=>{
  return (dispatch)=>{
      return axiosAuthen.post('api/admin/category/create', category).then(res=>{
          dispatch(actAddCategory(res.data));
      })
  }
}
export const actAddCategory=(category)=>{
  return {
      type: Types.ADD_CATEGORY,
      category
  }
}
export const actEditCategoryRequest=(id)=>{
  return (dispatch)=>{
      return axiosAuthen.get(`api/admin/category/${id}`,null).then(res=>{
          dispatch(actEditCategory(res.data));
      })
  }
}
export const actEditCategory=(category)=>{
  return {
      type: Types.EDIT_CATEGORY,
      category
  }
}
export const actUpdateCategoryRequest=(category)=>{
  return (dispatch)=>{
      return axiosAuthen.put(`api/category/update/${category.id}`,category).then(res=>{
          dispatch(actUpdateCategory(res.data));
      })
  }
}
export const actUpdateCategory=(category)=>{
  return {
      type: Types.UPDATE_CATEGORY,
      category
  }
}
//search
export const searchTask = (keyword) => {
  return {
      type : Types.SEARCH,
      keyword // keyword : keyword
  }
}
//sort totalCost
export const actFetchAllContractCost=()=>{
  return (dispatch)=>{
      return callAPI("GET", 'contract/sort', null).then(res=>{
          dispatch(sort(res.data));
      })
  }
}
export const sort =(contracts)=>{
  return {
      type: Types.SORT_CONTRACT,
      contracts
  }
}
//login
export const authenticate=()=>{
  return {
      type:Types.AUTH_REQ
  }
}


export const authSuccess= (content)=>{
  localStorage.setItem('USER_KEY',content.token);
  return {
      type:Types.AUTH_SUCCESS,
      payload:content
  }
}

export const authFailure=(error)=>{
  return {
      type:Types.AUTH_FAILURE,
      payload:error
  }
}


//
const getToken=()=>{
  return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
  return axios({
      'method':'POST',
      'url':`${process.env.hostUrl||'http://localhost:8080'}/api/login/user`,
      'data':authRequest
  })
}
// export const axiosClient = axios.create({
//   baseURL: 'http://localhost:8080',
// })

// // config request headers
// axiosClient.interceptors.request.use(config => {
//   config.headers.common['Authorization'] = 'Bearer ' + `${getToken() ? getToken() : ''}`;
//   return config;
// });
// export const fetchUserData=(authRequest)=>{
//   return axios({
//       method:'GET',
//       url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/userinfo`,
//       headers:{
//           'Authorization':'Bearer '+getToken()
//       }
//   })
// }

