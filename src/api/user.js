import Vue from "vue";
import {baseUrl} from "../components/ config/HttpConfig";
import LocalStorageUtil from "../plugins/LocalStorageUtil";

const storage = new LocalStorageUtil();
const getUserInfoApi = (user_id) => {
    let api = "/api/user/get_user_info";
    const token = storage.get("blog_token");
    let params={};
    if(user_id) {
        params.user_id = user_id;
    }
    return Vue.http.get(baseUrl + api, { params: params,headers: {token}});
}

const judgeAttentionUserApi = (user_id) => {
    let api = "/api/user/is_attention";
    const token = storage.get("blog_token");

    return Vue.http.get(baseUrl + api, { params: {user_id},headers: {token}});
}

const attentionUserApi = (user_id) => {
    let api = "/api/user/attention_user";
    const token = storage.get("blog_token");
    return Vue.http.get(baseUrl + api, { params: {user_id},headers: {token}});
}

export {
    getUserInfoApi,
    judgeAttentionUserApi,
    attentionUserApi
}