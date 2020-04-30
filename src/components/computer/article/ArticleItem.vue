<template>
    <div class="article-item" @click="articleItemClick">
        <div class="title"> {{articleInfo.articleTitle}}</div>
        <div class="description" v-html="articleInfo.articleContent">
        </div>
        <div class="foot">2020.2.24</div>
    </div>
</template>

<script>
    import {Message} from 'element-ui';

    export default {
        name: "ArticleItem",
        props:{
            articleInfo: {
                type: Object,
                default: function(){
                    return{
                        articleTitle: "标题",
                        articleContent: "content",
                        articleId: "",
                    }
                }
            }
        },
        data(){
            return {}
        },
        methods: {
            articleItemClick(){
                // /article_detail/{id}
                if(this.articleInfo.articleId === "") {
                    Message.warning("请刷新后重试。");
                    return;
                }
                this.$router.push(`/article_detail/${this.articleInfo.articleId}`);
            }
        }
    }
</script>

<style scoped>
    .article-item {
        height: 125px;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
    }

    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }

    .foot {
        font-size: 12px;
    }
</style>