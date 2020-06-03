<template>
    <div class="basic-infp-box">
        <Row v-if="userName" justify="center" type="flex">
            <Col :span="5" >姓名</Col>
            <Col :span="14" >{{userName}}</Col>
        </Row>
        <Row v-if="userNickname" justify="center" type="flex">
            <Col :span="5" >昵称</Col>
            <Col :span="14" >{{userNickname}}</Col>
        </Row>
        <Row v-if="userTelephoneNumber" justify="center" type="flex">
            <Col :span="5" >电话</Col>
            <Col :span="14" >{{userTelephoneNumber}}</Col>
        </Row>
        <Row v-if="userAge" justify="center" type="flex">
            <Col :span="5" >年龄</Col>
            <Col :span="14" >{{userAge}}</Col>
        </Row>
        <Row v-if="userBirthday" justify="center" type="flex">
            <Col :span="5" >生日</Col>
            <Col :span="14" >{{userBirthday}}</Col>
        </Row>
        <Row v-if="userRegistrationTime" justify="center" type="flex">
            <Col :span="5" >注册时间</Col>
            <Col :span="14" >{{userRegistrationTime}}</Col>
        </Row>
        <Row v-if="userIp" justify="center" type="flex">
            <Col :span="5" >用户Ip</Col>
            <Col :span="14" >{{userIp}}</Col>
        </Row>
        <Row v-if="userEmail" justify="center" type="flex">
            <Col :span="5" >邮箱</Col>
            <Col :span="14" >{{userEmail}}</Col>
        </Row>
<!--        <Row justify="center" type="flex">-->
<!--            <Col :span="5" >用户头像</Col>-->
<!--            <Col :span="14" >{{userProfilePhoto}}</Col>-->
<!--        </Row>-->

    </div>
</template>

<script>
    import { Row, Col } from "element-ui";
    import {mapState} from "vuex";

    export default {
        name: "BasicInfo",
        components: {
            Row, Col
        },
        beforeMount() {
            this.$store.dispatch("getUserInfo_basic");
        },
        computed: {
            ...mapState({
                userName: state => state.cPersonCenter.content.userName,
                userNickname: state=>state.cPersonCenter.content.userNickname,
                userTelephoneNumber: state=>state.cPersonCenter.content.userTelephoneNumber,
                userAge: state=>state.cPersonCenter.content.userAge,
                userBirthday: state=>state.cPersonCenter.content.userBirthday,
                userRegistrationTime: state=>state.cPersonCenter.content.userRegistrationTime,
                userIp: state=>state.cPersonCenter.content.userIp,
                userProfilePhoto: state=>state.cPersonCenter.content.userProfilePhoto,
                userEmail: state=>state.cPersonCenter.content.userEmail,
            })
        }

    }
</script>

<style scoped>
    .basic-infp-box {
        padding-top: 40px;

    }
    .basic-infp-box .el-row {
        margin-bottom: 20px;
    }
</style>