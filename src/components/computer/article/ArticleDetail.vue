<template>
    <div class="article-detail">
        <Container>
            <Aside>
                <User :showAttention="showAttention" :isAttention="isAttention" />
            </Aside>
            <Container class="right-con">
                <Header v-html="title"></Header>
                <Main>
                    <div class="article-content" v-html="content"></div>
                </Main>
                <Footer>Footer</Footer>
            </Container>
        </Container>
    </div>
</template>

<script>
    import {Container, Aside, Header, Main, Footer} from 'element-ui';
    import {mapState, mapActions, mapMutations} from 'vuex';
    import User from "../mainframe/User";
    import LocalStorageUtil from "../../../plugins/LocalStorageUtil";

    export default {
        name: "ArticleDetail",
        created() {
            const storage = new LocalStorageUtil();
            const articleId = this.$route.params.article_id;
            const userId = this.$route.params.user_id;
            const myUserId = storage.get("blog_user_id");

            this.queryArticleDetail(articleId);
            // 两个id相等的话说明是用户自己的文章，则不限时 关注组件，
            this.editShowAttention(!(userId === myUserId + ""));
            this.judgeIsAttention(userId);

        },
        components: {
            Container, Aside, Header, Main, Footer, User
        },
        computed: {
            ...mapState({
                title: state => state.cArticleDetail.title,
                content: state => state.cArticleDetail.content,
                showAttention: state => state.cArticleDetail.showAttention,
                isAttention: state => state.cArticleDetail.isAttention,
            })
        },
        methods: {
            ...mapActions([
                "queryArticleDetail", "judgeIsAttention"
            ]),
            ...mapMutations([
                "editShowAttention"
            ])
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        width: 320px!important;
        padding-top: 10px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .article-detail {
        background: #C9DBEE;
    }

    .article-detail > .el-container {
        min-height: 600px;
    }

    .article-content {
        line-height: normal;
        text-align: left;
    }


    .right-con {
        flex-direction: column;
    }

</style>