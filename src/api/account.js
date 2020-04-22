import {baseUrl} from "../components/ config/HttpConfig";
import Vue from 'vue';


const registerApi = (username, nickname, phone, password) => {
    let api = "/api/user/register";
    return Vue.http.post(baseUrl + api, {username, nickname, phone, password });
}

const loginApi = (phone, password)=>{
    let api = "/api/user/login";
    return Vue.http.post(baseUrl + api, {phone, password });
}



export {
    loginApi,
    registerApi
}



