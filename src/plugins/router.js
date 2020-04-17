import Vue from "vue";
import Router from "vue-router";
import Login from "../components/account/Login";
import Register from "../components/account/Register";

//电脑版
import MainFrame from "../components/computer/mainframe/MainFrame";

Vue.use(Router);

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
        }
    ]
});
