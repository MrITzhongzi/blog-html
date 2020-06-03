import {queryArticleById} from "../../../../api/article";

const computerArticleDetailModule = {
    state: {
        title: "",
        content: "",

    },
    mutations: {
        editTitle(state, value){
            state.title = value;
        },
        editContent(state, value){
            state.content = value;
        }
    },
    actions: {
        queryArticleDetail(context, value){
            const promise = queryArticleById(value);
            promise.then((res) => {
               console.log(res);
               const data = res.body;
               if(data.code === 0) {
                   context.commit("editTitle", data.data.articleTitle);
                   context.commit("editContent", data.data.articleContent);
               }
            }, (err) => {
                console.log(err);
            });

        }
    },
    getters: { }
}

export default computerArticleDetailModule;