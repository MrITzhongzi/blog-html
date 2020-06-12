import Vue from 'vue';
import Vuex from 'vuex';
import computerLoginModule from "./modules/account/login"
import computerRegisterModule from "./modules/account/register"
import articleListModule from "./modules/computer/mainframe/articleList"
import computerArticleDetailModule from "./modules/computer/article/articleDetail";
import computerArticleEditorModule from "./modules/computer/article/articleEditor";
import computerAersonCenterFrame from "./modules/computer/personcenter/personCenterFrame";
import computerUserModule from "./modules/computer/mainframe/user";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state:{

    },
    mutations: {},
    actions:{},
    modules: {
        cLogin: computerLoginModule,
        cRegister: computerRegisterModule,
        cArticleList: articleListModule,
        cArticleDetail: computerArticleDetailModule,
        cArticleEditor: computerArticleEditorModule,
        cUserModule: computerUserModule,
        // 个人中心
        cPersonCenter: computerAersonCenterFrame
    }
});

export default store;
