<template>
    <div class="header">
        <div class="header-left">
            <div class="logo">blog</div>
            <div>首页</div>
            <div>功能介绍</div>
            <div>作者</div>
            <div>版本</div>
        </div>
        <div class="header-right">
            <div class="write-blog" @click="gotoEditor">创作中心</div>
            <div class="user-header" @click="gotoPersonCenter">
                <MyImage :src="Logo"
                         fit="cover"
                          style="width: 30px;border-radius: 15px;"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {Image} from 'element-ui';
    import Logo from "../../../assets/default_head.jpeg";
    export default {
        name: "Header",
        components: {MyImage: Image},
        data(){
            return {
                Logo
            }
        },
        methods: {
            gotoEditor(){
                this.$router.push("/article_editor");
            },
            gotoPersonCenter(){
                this.$router.push("/person_center");
            }
        }
    }
</script>

<style scoped>

    .header {
        height: 44px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        background: #E5E6E7;
        display: flex;
        align-items: center;
        font-size: 14px;
        text-align: center;

    }

    .header-left {
        flex-grow: 1;
        display: flex;
    }

    .header-left > div {
        padding: 0 30px;
        align-items: center;
    }

    .header-left > .logo {
        width: 200px;
        font-size: 20px;
        font-weight: bold;
        color: black;
        transform: rotate(12deg);
    }

    .header-right {
        width: 200px;
        display: flex;
        align-items: center;
    }

    .write-blog {
        cursor: pointer;
    }
    .user-header {
        width: 40px;
    }
</style>