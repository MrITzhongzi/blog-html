<template>
    <div class="article-detail">
        <Container>
            <Aside>
                <User :showAttention="true" :isAttention="false"/>
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
    import {mapState, mapActions} from 'vuex';
    import User from "../mainframe/User";

    export default {
        name: "ArticleDetail",
        created() {
            const articleId = this.$route.params.id;
            this.queryArticleDetail(articleId);
        },
        components: {
            Container, Aside, Header, Main, Footer, User
        },
        computed: {
            ...mapState({
                title: state => state.cArticleDetail.title,
                content: state => state.cArticleDetail.content
            })
        },
        methods: {
            ...mapActions([
                "queryArticleDetail"
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