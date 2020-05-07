import Vue from 'vue';
import Vuex from 'vuex';
import computerLoginModule from "./modules/computer/login"
import computerRegisterModule from "./modules/computer/register"
import articleListModule from "./modules/computer/articleList"
import computerArticleDetailModule from "./modules/computer/articleDetail";
import computerArticleEditorModule from "./modules/computer/articleEditor";

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
        cArticleEditor: computerArticleEditorModule
    }
});

export default store;
