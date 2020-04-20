import Vue from 'vue';
import Vuex from 'vuex';
import computerLoginModule from "./modules/computer/login"
import computerRegisterModule from "./modules/computer/register"
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state:{

    },
    mutations: {},
    actions:{},
    modules: {
        cLogin: computerLoginModule,
        cRegister: computerRegisterModule
    }
});

export default store;
