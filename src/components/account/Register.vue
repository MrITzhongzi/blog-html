<template>
    <div class="register">
        <div class="register-con">
            <Form>
                <h3 class="register-title">用户登录</h3>
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

    import {Input, Button, FormItem, Form} from 'element-ui';

    export default {
        name: "Register",
        components: {
            Input, Button, FormItem, Form
        },
        methods: {
            register() {

            }
        },
        computed: {
           phone: {
               get(){
                   return this.$store.state.cRegister.phone;
               },
               set(value){
                   this.$store.commit("editPhone", value);
               }
           },
            password: {
                get(){
                    return this.$store.state.cRegister.password;
                },
                set(value){
                    this.$store.commit("editPwd", value);
                }
            },
            repassword: {
                get(){
                    return this.$store.state.cRegister.repassword;
                },
                set(value){
                    this.$store.commit("editRePwd", value);
                }
            }
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