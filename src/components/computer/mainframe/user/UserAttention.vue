<template>
    <div class="user-attention">
        <template v-if="!flag">
            <Button type="danger" round>关注</Button>
        </template>
        <template v-else>
            <Button type="info" round>已关注</Button>
        </template>
    </div>
</template>

<script>
    import {Button} from 'element-ui';

    export default {
        name: "UserAttention",
        props: ["flag"],
        components: {
            Button
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>