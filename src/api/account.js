import {baseUrl} from "../components/ config/HttpConfig";
import Vue from 'vue';


const registerApi = (username, nickname, phone, password) => {
    let api = "/api/user/register";
    return Vue.http.post(baseUrl + api, {username, nickname, phone, password });
}

const loginApi = ()=>{

}



export {
    loginApi,
    registerApi
}



