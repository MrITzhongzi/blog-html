<template>
    <div class="person-center-nav">
        <Menu
                default-active="/person_center/basic"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#806447"
                text-color="#fff"
                active-text-color="#D86429"
                :router="true">

            <MenuItem index="/person_center/basic">
                <i class="el-icon-menu"></i>
                <span slot="title">基本信息</span>
            </MenuItem>
            <MenuItem index="/person_center/attention">
                <i class="el-icon-document"></i>
                <span slot="title">我的关注</span>
            </MenuItem>
            <MenuItem index="/person_center/fans">
                <i class="el-icon-setting"></i>
                <span slot="title">我的粉丝</span>
            </MenuItem>
            <MenuItem index="/person_center/update">
                <i class="el-icon-setting"></i>
                <span slot="title">完善资料</span>
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
    import { Menu, MenuItem } from "element-ui";

    export default {
        name: "PersonCenterNav",
        components: {
            Menu, MenuItem
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .person-center-nav {
        height: 100%;
        background: #806447;
    }
</style>