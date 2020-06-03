import {insertArticle} from "../../../../api/article"
import {Message} from "element-ui";

const computerArticleEditorModule = {
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
        saveArticle(context, vueContext) {
            const promise = insertArticle(context.state.title, context.state.content);
            promise.then((res)=>{
                const data = res.body;
                if(data.code === 0) {
                    Message.info(data.description);
                    vueContext.$router.push("/");
                } else {
                    Message.info("文章插入失败，请稍后重试");
                }
            }, ()=>{
                Message.info("文章插入失败，请稍后重试");
            })
        }
    },
    getters: { }
}

export default computerArticleEditorModule;