<template>
    <div class="default-page-box">
        <div class="default-page-con">
            <MyImage :src="imgSrc" mode="widthFix" style="width: 200px;"/>
            <Button class="login-btn" type="primary">请登录</Button>
        </div>
    </div>
</template>

<script>
    import {Image, Button} from "element-ui";
    import UserNotLoginImage from "../../../../assets/user_not_login.png";
    export default {
        name: "DefaultPage",
        components: {
            MyImage: Image,
            Button
        },
        data(){
            return{
                imgSrc: UserNotLoginImage
            }
        }
    }
</script>

<style scoped>
.default-page-box {

}
    .default-page-con {
        text-align: center;
        margin: 100px auto 0;
        display: flex;
        flex-direction: column;
        width: 200px;
    }
    .login-btn {
        margin-top: 20px;
    }
</style>