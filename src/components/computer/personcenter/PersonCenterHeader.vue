<template>
    <div class="header-box">
        <template v-if="username">
        <div class="header-con" >
            <MyImage fit="cover" :style="imageSty" :src="url"/>
            <div class="desc">{{username}}</div>
        </div>
        </template>
        <template v-else>
            <div class="header-con" >
                <MyImage fit="cover" :style="imageSty" :src="url"/>
                <div class="desc">请登录……</div>
            </div>
        </template>
    </div>
</template>

<script>
    import {Image} from "element-ui";
    import Logo from "../../../assets/default_head.jpeg";
    import LocalStorageUtil from "../../../plugins/LocalStorageUtil";
    import {mapState} from "vuex";

    export default {
        name: "PersonCenterHeader",
        components: {
            MyImage: Image
        },
        beforeMount() {
            let localStorageUtil = new LocalStorageUtil();
            let username = localStorageUtil.get("blog_nickname");
            if (username) {
                this.$store.commit("editPCUsername", username);
            }
        },
        data: function () {
            return {
                url: Logo,
                imageSty: {
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px"
                }
            }
        },
        computed: {
            ...mapState({
                username: state => state.cPersonCenter.header.username
            })
        }
    }
</script>

<style scoped>
    .header-box {
        height: 250px;
    }

    .header-con {
        width: 50%;
        margin: 50px auto 0;
        text-align: center;
    }

    .desc {
        margin-top: 10px;
    }
</style>