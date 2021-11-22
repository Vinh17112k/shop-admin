/* eslint-disable prettier/prettier */
import axios from "axios";
import URL from "../actions/Config";

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
