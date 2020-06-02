<template>
    <div class="article-list">
        <ArticleItem v-for="(item, index) in allArticleList" :key="index" :articleInfo="item"/>
        <ArticlePage :total="totalSize" :changePage="articlePageChange"/>
    </div>
</template>

<script>
    import ArticleItem from "../article/ArticleItem";
    import ArticlePage from "../article/ArticlePage";
    import { mapActions, mapState} from 'vuex';

    export default {
        name: "ArticleList",
        created() {
            this.queryAllArticle({page: 1, size: 10});
        },
        components: {
            ArticleItem,
            ArticlePage
        },
        computed: {
            ...mapState({
                page: state => state.cArticleList.page,
                size: state => state.cArticleList.size,
                totalSize: state => state.cArticleList.totalSize,
                allArticleList: state => state.cArticleList.allArticleList
            })
        },
        methods: {
            ...mapActions([
                "queryAllArticle"
            ]),
            articlePageChange(page){
                this.queryAllArticle({page, size: 10})
            }
        }
    }
</script>

<style scoped>
    .article-list {
        flex-grow: 1;
        min-height: 600px;
        max-height: 1400px;
        position: relative;
        padding-bottom: 50px;
        margin-right: 10px;
    }
</style>