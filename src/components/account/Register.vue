<template>
    <div class="register">
        <div class="register-con">
            <Form>
                <h3 class="register-title">用户登录</h3>
                <FormItem>
                    <Input v-model="phone" placeholder="请输入手机号"/>
                </FormItem>
                <FormItem>
                    <Input v-model="password" placeholder="密码"/>
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
        data() {
            return {
                phone: "",
                password: ""
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