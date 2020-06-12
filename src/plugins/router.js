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
import DefaultPage from "../components/computer/personcenter/PersonCenterContent/DefaultPage";
import CommenUtil from "./CommenUtil";

// 插件
Vue.use(Router);
Vue.use(VueResource);

 const MyRouter = new Router({
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
                    path: "default",
                    component: DefaultPage
                },
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

// 判断是否需要登录权限 以及是否登录
MyRouter.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.regex.test("/person_center"))) {// 判断是否需要登录权限
        if (CommenUtil.checkToken()) {// 判断是否登录
            next()
        } else {// 没登录则跳转到登录界面
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
})

export default MyRouter;
