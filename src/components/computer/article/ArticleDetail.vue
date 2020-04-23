<template>
    <div class="article-detail">
        <Container>
            <Aside >Aside</Aside>
            <Container class="right-con">
                <Header>{{title}}</Header>
                <Main>{{content}}</Main>
                <Footer>Footer</Footer>
            </Container>
        </Container>
    </div>
</template>

<script>
    import {Container, Aside, Header, Main, Footer} from 'element-ui';
    import {mapState, mapActions} from 'vuex';
    export default {
        name: "ArticleDetail",
        created() {
            this.queryArticleDetail(2);
        },
        components: {
            Container, Aside, Header, Main, Footer
        },
        computed: {
            ...mapState({
                title: state => state.cArticleDetail.title,
                content:state => state.cArticleDetail.content
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
        line-height: 200px;
        width: 300px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .article-detail > .el-container {
        min-height: 600px;
    }

    .right-con {
        flex-direction: column;
    }
</style>