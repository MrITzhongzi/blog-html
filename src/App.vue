<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    body {
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    /* 对p初始化 */
    p {
        margin: 0;
        padding: 0;
    }

    /* 富文本编辑器 css*/
    .w-e-text-container {
        height: 70%!important;
    }
</style>
