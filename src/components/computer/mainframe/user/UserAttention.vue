<template>
    <div class="user-attention">
        <template v-if="!flag">
            <Button type="danger" @click="attentionUser" round>关注</Button>
        </template>
        <template v-else>
            <Button type="info" round>已关注</Button>
        </template>
    </div>
</template>

<script>
    import {Button} from 'element-ui';
    import {mapActions} from 'vuex';

    export default {
        name: "UserAttention",
        props: ["flag"],
        components: {
            Button
        },
        created() {
            const userId = this.$route.params.userId;
            console.log(userId);
        },
        data(){
            return{

            }
        },
        methods: {
            ...mapActions([
                "attentionUserAction"
            ]),
            attentionUser(){
                const userId = this.$route.params.user_id;
                this.attentionUserAction(userId);
            }
        }
    }
</script>

<style scoped>

</style>