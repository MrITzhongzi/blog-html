<template>
    <div class="login">
        <div class="login-con">
            <Form>
                <h3 class="login-title">用户登录</h3>
                <FormItem>
                    <Input v-model="phone" placeholder="请输入手机号"/>
                </FormItem>
                <FormItem>
                    <Input v-model="password" type="password" placeholder="密码"/>
                </FormItem>
                <div class="login-btn-box">
                    <div class="register" @click="goRegister">马上注册</div>
                    <Button type="primary" @click="login">登录</Button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>

    import {Input, Button, FormItem, Form, Message} from 'element-ui';
    import {loginApi} from "../../api/account";
    import LocalStorageUtil from "../../plugins/LocalStorageUtil";

    export default {
        name: "Login",
        components: {
            Input, Button, FormItem, Form
        },
        created() {
            this.$store.commit('clear');
        },
        methods: {
            login() {

                if (this.phone === "") {
                    Message.error("请输入手机号");
                    return;
                }
                if (this.password === "") {
                    Message.error("请输入密码");
                    return;
                }

                const promise = loginApi(this.phone, this.password)
                promise.then((res) => {
                    let data = res.body;
                    if (data.code === 0) {
                        Message.success("登录成功");
                        const storage = new LocalStorageUtil();
                        storage.set("blog_token", data.data.token);
                        storage.set("blog_nickname", data.data.nickname);
                        storage.set("blog_phone", data.data.phone);
                        storage.set("blog_username", data.data.username);
                        storage.set("blog_user_id", data.data.userId);
                        this.$router.push("/");
                        this.$store.commit("editIsLogin", true);
                    } else {
                        Message.error(data.description);
                    }
                }, (err) => {
                    console.log("login err", err);
                    Message.error("登录失败，请稍后重试。");
                })

            },
            goRegister() {
                this.$router.push("/register");
            }
        },
        data() {
            return {};
        },
        computed: {
            phone: {
                get() {
                    return this.$store.state.cLogin.phone;
                },
                set(value) {
                    this.$store.commit('editPhone', value);
                }
            },
            password: {
                get(){
                    return this.$store.state.cLogin.password;
                },
                set(value){
                    this.$store.commit("editPwd", value);
                }
            }
        }
    }
</script>

<style scoped>
    .login-con {
        width: 100%;
        max-width: 300px;
        min-width: 250px;
        margin: 30vh auto 0;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 10px;
    }

    .login-title {
        color: #429CFC;
    }

    .login-btn-box {
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .register {
        font-size: 12px;
        color: #999;
        margin-right: 20px;
        cursor: pointer;
    }
</style>
