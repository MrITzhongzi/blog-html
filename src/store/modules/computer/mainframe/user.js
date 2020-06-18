import {getUserInfoApi} from "../../../../api/user";
import {Message} from "element-ui";
import userAttentionModule from "./user/userAttention";

const userModule = {
    state: {
        headImg: "",
        username: "",
        blogNum: "",
        visitNum: "",
        likeNum: "",
        fansNum: "",
        isLogin: true
    },
    mutations: {
        editUserInfo(state, value){
            if(value.userNickname) {
                state.username = value.userNickname;
            }
        },
        editIsLogin(state, value){
            state.isLogin = value;
        }
    },
    actions: {
        queryUserInfo(context, param){
            let promise = getUserInfoApi(param);
            promise.then((res)=>{
                let data = res.body;
                if(data.code === 0) {
                    context.commit("editUserInfo", data.data)
                } else {
                    Message.info(data.description);
                }
            }, () => {
                Message.info("网络异常，请稍后再试……");
            })
        }
    },
    getters: {},
    modules: {
        userAttention: userAttentionModule
    }
}

export default userModule;