/* eslint-disable prettier/prettier */
import axios from "axios";
import URL from "../actions/Config";
// export const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080',
// })

// // config request headers
// axiosClient.interceptors.request.use(config => {
//     config.headers.common['Authorization'] = 'Bearer ' + `${JwT_token ? JwT_token : ''}`;
//     return config;
//   });

export default function callAPI(method, endPoint, dataBody){
    return(
        axios({
            method: method,
            url: `${URL}/${endPoint}`,
            data: dataBody
        }).catch(error=>{
            console.log(error);
        })
    )
}
