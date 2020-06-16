<template>
    <div class="userinfo-box">

        <template v-if="isLogin">
        <div class="userinfo">
            <div class="userinfo-top">
                <div class="head-img-box">
                    <MyImage :src="Header"
                             class="userinfo-img"/>
                    <div class="userinfo-name">{{username}}</div>
                </div>
                <div class="attation" v-if="showAttention">
                     <UserAttention :flag="isAttention"/>
                </div>
            </div>
            <div class="userinfo-bottom">
                <div class="row">
                    <div class="key">原创:</div>
                    <div class="value">100</div>
                </div>
                <div class="row">
                    <div class="key">浏览量:</div>
                    <div class="value">100</div>
                </div>
                <div class="row">
                    <div class="key">点赞数:</div>
                    <div class="value">100</div>
                </div>
                <div class="row">
                    <div class="key">粉丝:</div>
                    <div class="value">100</div>
                </div>
            </div>
        </div>
        </template>
        <template v-else>
            <div class="not-login">
                <Button type="primary" @click="login">请登录……</Button>
            </div>
        </template>

    </div>
</template>

<script>
    import {Image, Button} from 'element-ui';
    import Header from "../../../assets/default_head.jpeg";
    import {mapState, mapActions} from "vuex";
    import LocalStorageUtil from "../../../plugins/LocalStorageUtil";
    import UserAttention from "./user/UserAttention";

    export default {
        name: "User",
        components: {
            MyImage: Image,Button, UserAttention

        },
        created() {
            const storage = new LocalStorageUtil();
            const token = storage.get("blog_token");
            if(token) {
                this.queryUserInfo();
            } else {
                this.$store.commit("editIsLogin", false)
            }

        },
        props: ["isAttention","showAttention"],
        data() {
            return {
                Header,
            }
        },
        computed: {
            ...mapState({
                headImg: state => state.cUserModule.headImg,
                username: state => state.cUserModule.username,
                blogNum: state => state.cUserModule.blogNum,
                visitNum: state => state.cUserModule.visitNum,
                likeNum: state => state.cUserModule.likeNum,
                fansNum: state => state.cUserModule.fansNum,
                isLogin: state => state.cUserModule.isLogin,
            })
        },
        methods: {
            ...mapActions(["queryUserInfo"]),
            login(){
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>
    .userinfo {
        width: 300px;
        max-width: 300px;
        min-width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: #FFDA56;
        margin-left: 10px;
        margin-right: 10px;
        line-height: 20px;
    }

    .userinfo-top {
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .head-img-box {
        text-align: center;
        margin-right: 20px;
    }

    .userinfo-img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }

    .userinfo-name {
        margin-top: 5px;
    }

    .userinfo-bottom {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .userinfo-bottom .row {
        display: flex;
        width: 50%;
        height: 50px;
        text-align: center;
    }

    .userinfo-bottom .row .key {
        width: 60px;
        text-align: right;
    }

    .userinfo-bottom .row .value {
        flex-grow: 1;
        margin-left: 10px;
        text-align: left;
    }

    .not-login {
        width: 300px;
        max-width: 300px;
        min-width: 300px;
        height: 300px;
        margin-left: 10px;
        margin-right: 10px;
        background: #FFDA56;
        box-sizing: border-box;
        text-align: center;
        line-height: 300px;
    }

</style>