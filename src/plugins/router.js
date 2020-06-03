import Vue from "vue";
import Router from "vue-router";
import VueResource from 'vue-resource';

import Login from "../components/account/Login";
import Register from "../components/account/Register";

//电脑版
import MainFrame from "../components/computer/mainframe/MainFrame";
import ArticleDetail from "../components/computer/article/ArticleDetail";
import ArticleEditor from "../components/computer/article/ArticleEditor";
import PersonCenterFrame from "../components/computer/personcenter/PersonCenterFrame";
import BasicInfo from "../components/computer/personcenter/PersonCenterContent/BasicInfo";
import MyAttentionPeople from "../components/computer/personcenter/PersonCenterContent/MyAttentionPeople";
import MyFans from "../components/computer/personcenter/PersonCenterContent/MyFans";
import Updateinfo from "../components/computer/personcenter/PersonCenterContent/Updateinfo";

// 插件
Vue.use(Router);
Vue.use(VueResource);

export default new Router({
    routes:[
        {
            path: "/",
            component: MainFrame
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/article_detail/:id",
            component: ArticleDetail
        },
        {
            path: "/article_editor",
            component: ArticleEditor
        },
        {
            path: "/person_center",
            component: PersonCenterFrame,
            children: [
                {
                    path: "basic",
                    component: BasicInfo
                },
                {
                    path: "attention",
                    component: MyAttentionPeople
                },
                {
                    path: "fans",
                    component: MyFans
                },
                {
                    path: "update",
                    component: Updateinfo
                }
            ]
        }
    ]
});
