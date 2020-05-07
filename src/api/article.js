import Vue from "vue";
import {baseUrl} from "../components/ config/HttpConfig";
import LocalStorageUtil from "../plugins/LocalStorageUtil";

const storage  = new LocalStorageUtil();

const queryAllArticleList = (page = 1, size = 10) => {
    let api = "/api/article/all";
    return Vue.http.get(baseUrl + api, {params: {page, size}});
}

const queryArticleById = (article_id) => {
    let api = "/api/article/get_article_by_id";
    return Vue.http.get(baseUrl + api, {params: {article_id}});
}

const insertArticle = (title, content) => {
    let api = "/api/article/publish";
    const token = storage.get("blog_token");
    return Vue.http.post(baseUrl + api, {title, content}, { headers: {token}});
}

export {
    queryAllArticleList,
    queryArticleById,
    insertArticle
}