import {getUserInfoApi} from "../../../../api/user";
import {Message} from "element-ui";

const userModule = {
    state: {
        headImg: "",
        username: "",
        blogNum: "",
        visitNum: "",
        likeNum: "",
        fansNum: "",
        isAttention: false
    },
    mutations: {
        editUserInfo(state, value){
            if(value.userNickname) {
                state.username = value.userNickname;
            }

        }
    },
    actions: {
        queryUserInfo(context){

            let promise = getUserInfoApi();
            promise.then((res)=>{
                console.log(res);
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
    getters: {}
}

/**

 "userIp": "192.168.1.3",
 "userName": "李洪伟",
 "userEmail": null,
 "userProfilePhoto": null,
 "userRegistrationTime": null,
 "userBirthday": null,
 "userAge": null,
 "userTelephoneNumber": "17862806857",
 "userNickname": "Mr_li"

 */

export default userModule;