import {queryAllArticleList} from "../../../api/article";
import {Message} from "element-ui";

const articleListModule = {
    state: {
        page: 1,
        size: 10,
        totalPage: 1,
        totalSize: 7,
        allArticleList: []
    },
    mutations: {
        addArticleList(state, value) {
            let data = value.data;
            let articltList = data.data;

            state.allArticleList = articltList;
            state.page = data.current_page;
            state.totalPage = data.total_page;
            state.totalSize = data.total_size;
        }
    },
    actions: {
        queryAllArticle(context, pageinfo) {
            console.log(context);
            const page = pageinfo.page;
            const size = pageinfo.size;
            const promise = queryAllArticleList(page, size)
            promise.then((res) => {
                const data = res.body;
                if (data.code === 0) {
                    context.commit("addArticleList", data);
                } else {
                    Message.error("查询文章列表出错，请稍后重试……");
                }

            }, (err) => {
                console.log(err);
                Message.error("查询文章列表出错，请稍后重试……");
            })
        }
    },
    getters: {}
}

export default articleListModule;