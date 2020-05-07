<template>
    <div class="article-edit-box">
        <div class="article-title-box">
            <div class="title-con">
                <Input v-model="title" placeholder="请输入标题"/>
            </div>
            <div class="save-box">
                <Button type="primary" @click="saveArticle">保存文章</Button>
            </div>
        </div>
        <div class="article-edit">
            <div ref="editor" style="text-align:left;height: 100%;"></div>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import {Input, Button} from 'element-ui'
    // import {mapActions} from "vuex";

    export default {
        name: "ArticleEditor",
        mounted() {
            const editor = new E(this.$refs.editor);
            editor.customConfig.onchange = (html) => {
                this.$store.commit("editContent", html);
            }

            editor.create();
        },
        components: {
            Input, Button
        },
        computed: {
            title: {
                get() {
                    return this.$store.state.cArticleEditor.title;
                },
                set(value) {
                    this.$store.commit("editTitle", value);
                }
            }
        },
        methods: {
            saveArticle() {
                this.$store.dispatch("saveArticle", this);

            }
        }
    }
</script>

<style scoped>
    .article-edit-box {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }

    .article-title-box {
        display: flex;
        height: 50px;
    }
    .title-con {
        flex-grow: 1;
    }
    .save-box {
        flex-basis: 100px;
    }
    .article-edit {
        flex-grow: 1;
        margin-top: 20px;
    }

</style>