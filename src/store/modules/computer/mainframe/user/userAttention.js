import {attentionUserApi} from "../../../../../api/user";
import {Message} from "element-ui";

const userAttentionModule = {
    state: {

    },
    mutations: {

    },
    actions: {
        attentionUserAction(context, value){
            console.log(value)
            const promise = attentionUserApi(value)
            promise.then(res => {
                console.log(res);
                const data = res.body;
                if(data.code === 0) {
                    Message.info("关注成功");
                    context.commit("editIsAttention", true);
                } else {
                    Message.error(data.description);
                }
            }, err => {
                Message.error("关注失败，请稍后重试……");
                console.log(err)
            })
        }
    },
    getters: {}
}

export default userAttentionModule;