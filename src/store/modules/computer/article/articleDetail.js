import {queryArticleById} from "../../../../api/article";

const computerArticleDetailModule = {
    state: {
        title: "",
        content: "",
        userId:"",
        articleId: "",
    },
    mutations: {
        editArticleDetailInfo(state, value){
            console.log(value)
            state.title = value.articleTitle;
            state.content = value.articleContent;
            state.articleId = value.articleId;
            state.userId = value.userId;
        },

    },
    actions: {
        queryArticleDetail(context, value){
            const promise = queryArticleById(value);
            promise.then((res) => {
               console.log(res);
               const data = res.body;
               if(data.code === 0) {
                   context.commit("editArticleDetailInfo", data.data);
               }
            }, (err) => {
                console.log(err);
            });

        }
    },
    getters: { }
}

export default computerArticleDetailModule;