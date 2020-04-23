<template>
    <div class="article-list">
        <ArticleItem v-for="(item, index) in allArticleList" :key="index" :articleInfo="item"/>
    </div>
</template>

<script>
    import ArticleItem from "../article/ArticleItem";
    import { mapActions, mapState} from 'vuex';

    export default {
        name: "ArticleList",
        created() {
            this.queryAllArticle({page: 1, size: 10});
        },
        components: {
            ArticleItem
        },
        computed: {
            ...mapState({
                page: state => state.cArticleList.page,
                size: state => state.cArticleList.size,
                allArticleList: state => state.cArticleList.allArticleList
            })
        },
        methods: {
            ...mapActions([
                "queryAllArticle"
            ])
        }
    }
</script>

<style scoped>
    .article-list {
        flex-grow: 1;
        border: 1px solid #429CFC;
        min-height: 600px;
        max-height: 1200px;
    }
</style>