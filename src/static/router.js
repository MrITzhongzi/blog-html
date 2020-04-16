import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Login from "../components/account/Login";
import Register from "../components/account/Register";

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: "/333",
            component: HelloWorld
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
