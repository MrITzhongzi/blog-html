import {queryAttentionUserListApi} from "../../../../../api/user";
import {Message} from "element-ui";

const myAttentionPeopleModule = {
    state: {
        attentionList: []
    },
    mutations: {
        editAttentionList(state, value){
            state.attentionList = value;
        }
    },
    actions: {
        queryAttentionList(context){
            const promise = queryAttentionUserListApi()
            promise.then(res => {
                const data = res.body;
                if(data.code === 0) {
                    context.commit("editAttentionList", data.data);
                } else {
                    Message.info("查询关注好友失败，请稍后再试……");
                }
            }, (err)=>{
                console.log(err);
                Message.info("查询关注好友失败，请稍后再试……");
            });

        }
    },
    getters: {}
}

export default myAttentionPeopleModule;