import {getUserInfoApi} from "../../../../../api/user";
import {Message} from "element-ui";

const basicInfo = {
    state: {
        userName: "",
        userNickname: "",
        userTelephoneNumber: "",
        userAge: "",
        userBirthday: "",
        userRegistrationTime: "",
        userIp: "",
        userEmail: "",
        userProfilePhoto: ""
    },
    mutations: {
        showUserInfo(state, value){
            for(let key in value) {
                state[key] = value[key];
            }
        }
    },
    actions: {
        getUserInfo_basic(context){

            const promise = getUserInfoApi();
            promise.then((res)=>{

                const data = res.body;
                if(data.code === 0) {
                    context.commit("showUserInfo", data.data)
                } else {
                    Message.error(data.description);
                }
            }, ()=> {
                Message.error("查询用户信息出错，请稍后重试……");
            })
        }
    },
    getters: {}
}

export default basicInfo;