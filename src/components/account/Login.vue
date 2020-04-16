<template>
    <div class="login">
        <div class="login-con">
            <Form>
                <h3 class="login-title">用户登录</h3>
                <FormItem>
                    <Input v-model="phone" placeholder="请输入手机号"/>
                </FormItem>
                <FormItem>
                    <Input v-model="password" placeholder="密码"/>
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


    export default {
        name: "Login",
        components: {
            Input, Button, FormItem, Form
        },
        methods: {
            login() {
                if (this.$data.phone === "") {
                    Message.error("请输入手机号");
                    return;
                }
                if (this.$data.password === "") {
                    Message.error("请输入密码");
                    return;
                }

            },
            goRegister(){
                this.$router.push("/register");
            }
        },
        data() {
            return {
                phone: "",
                password: "",
                rePassword: ""
            };
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
