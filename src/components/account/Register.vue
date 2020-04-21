<template>
    <div class="register">
        <div class="register-con">
            <Form>
                <h3 class="register-title">用户登录</h3>
                <FormItem>
                    <Input v-model="nickname" placeholder="请输入用户昵称"/>
                </FormItem>
                <FormItem>
                    <Input v-model="username" placeholder="请输入真实姓名"/>
                </FormItem>
                <FormItem>
                    <Input v-model="phone" placeholder="请输入手机号"/>
                </FormItem>
                <FormItem>
                    <Input v-model="password" type="password" placeholder="请输入密码"/>
                </FormItem>
                <FormItem>
                    <Input v-model="repassword" type="password" placeholder="请再次输入密码"/>
                </FormItem>
                <div class="register-btn-box">
                    <Button type="primary" @click="register">注册</Button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>

    import {Input, Button, FormItem, Form, Message} from 'element-ui';
    import {registerApi} from "../../api/account";

    export default {
        name: "Register",
        components: {
            Input, Button, FormItem, Form
        },
        methods: {
            register() {
                const username = this.$store.state.cRegister.username;
                const nickname = this.$store.state.cRegister.nickname;
                const password = this.$store.state.cRegister.password;
                const repassword = this.$store.state.cRegister.repassword;
                const phone = this.$store.state.cRegister.phone;

                if(password.trim() === "") {
                    Message.error("密码不能为空");
                    return;
                }
                if(password !== repassword) {
                    Message.error("两次密码不一致。");
                    return;
                }
                if(!(/^1[3456789]\d{9}$/.test(phone.trim()))) {
                    Message.error("手机号格式错误");
                    return;
                }

                const promise = registerApi(username, nickname, phone, password);
                promise.then((res) => {
                    let data = res.body;
                    if (data.code === 0) {
                        Message.success("注册成功");
                        this.$router.push("/login");
                    } else {
                        Message.error(data.description);
                    }
                }, (err) => {
                    console.log("register err", err);
                    Message.error("注册失败，请稍后重试。");
                })
            }
        },
        computed: {
            phone: {
                get() {
                    return this.$store.state.cRegister.phone;
                },
                set(value) {
                    this.$store.commit("editPhone", value);
                }
            },
            password: {
                get() {
                    return this.$store.state.cRegister.password;
                },
                set(value) {
                    this.$store.commit("editPwd", value);
                }
            },
            repassword: {
                get() {
                    return this.$store.state.cRegister.repassword;
                },
                set(value) {
                    this.$store.commit("editRePwd", value);
                }
            },
            nickname: {
                get() {
                    return this.$store.state.cRegister.nickname;
                },
                set(value) {
                    this.$store.commit("editNickname", value);
                }
            },
            username: {
                get() {
                    return this.$store.state.cRegister.username;
                },
                set(value) {
                    this.$store.commit("editUsername", value);
                }
            },
        }
    }
</script>

<style scoped>
    .register-con {
        width: 100%;
        max-width: 300px;
        min-width: 250px;
        margin: 30vh auto 0;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 10px;
    }

    .register-title {
        color: #429CFC;
    }

    .register-btn-box {
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

</style>