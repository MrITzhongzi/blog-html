import {queryArticleById} from "../../../../api/article";
import {judgeAttentionUserApi} from "../../../../api/user";

import {Message} from "element-ui";

const computerArticleDetailModule = {
    state: {
        title: "",
        content: "",
        userId:"",
        articleId: "",
        showAttention: false,
        isAttention: false
    },
    mutations: {
        editArticleDetailInfo(state, value){
            state.title = value.articleTitle;
            state.content = value.articleContent;
            state.articleId = value.articleId;
            state.userId = value.userId;
        },

        editIsAttention(state, value){
            // value false 没有关注 true 关注
            state.isAttention = value;
        },
        editShowAttention(state, value){

            state.showAttention = value;
        }

    },
    actions: {
        queryArticleDetail(context, value){
            const promise = queryArticleById(value);
            promise.then((res) => {

               const data = res.body;
               if(data.code === 0) {
                   context.commit("editArticleDetailInfo", data.data);
               }
            }, (err) => {
                console.log(err);
            });
        },
        judgeIsAttention(context, value){
            const promise = judgeAttentionUserApi(value);
            promise.then(res=> {
                console.log(res);
                let data = res.body;
                if(data.code === 0) {
                    context.commit("editIsAttention", data.data);
                } else {
                    Message.error("查询关注信息失败，请稍后重试……")
                }

            }, err => {
                console.log(err);
            });
        }
    },
    getters: { }
}

export default computerArticleDetailModule;