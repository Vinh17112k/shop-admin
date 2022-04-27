/* eslint-disable prettier/prettier */
import axios from "axios";
const JwT_token = localStorage.getItem("USER_KEY")

export const axiosAuthen = axios.create({
    baseURL: 'http://localhost:8080',
})

// config request headers
axiosAuthen.interceptors.request.use(config => {
    config.headers.common['Authorization'] = 'Bearer ' + `${JwT_token ? JwT_token : ''}`;
    return config;
  });
