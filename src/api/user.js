import Vue from "vue";
import {baseUrl} from "../components/ config/HttpConfig";
import LocalStorageUtil from "../plugins/LocalStorageUtil";

const storage = new LocalStorageUtil();
const getUserInfoApi = () => {
    let api = "/api/user/get_user_info";
    const token = storage.get("blog_token");
    return Vue.http.get(baseUrl + api, { headers: {token}});
}

export {
    getUserInfoApi
}