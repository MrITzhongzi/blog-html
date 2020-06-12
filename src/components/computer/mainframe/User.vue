<template>
    <div class="userinfo">
        <div class="userinfo-top">
            <div class="head-img-box">
                <MyImage :src="Header"
                         class="userinfo-img"/>
                <div class="userinfo-name">{{username}}</div>
            </div>
            <div class="attation">
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

<script>
    import {Image} from 'element-ui';
    import Header from "../../../assets/default_head.jpeg";
    import UserAttention from "./user/UserAttention";
    import {mapState, mapActions} from "vuex";

    export default {
        name: "User",
        components: {
            MyImage: Image,
            UserAttention
        },
        created() {
            this.queryUserInfo();
        },
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
                isAttention: state => state.cUserModule.isAttention
            })
        },
        methods: {
            ...mapActions(["queryUserInfo"])
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
        /*background: rgba(0,0,0,0.3);*/
        background: #FFDA56;
        margin-left: 10px;
        margin-right: 10px;
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
</style>