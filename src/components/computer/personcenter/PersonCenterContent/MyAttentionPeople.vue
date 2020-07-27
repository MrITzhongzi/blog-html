<template>
    <div class="attention-list-box">
        <div class="attention-list">
            <div class="attention-item">
                <div class="header">
                    <MyImage :src="DefaultHeader"/>
                </div>
                <div class="desc">
                    <div class="name">李洪伟</div>
                    <div class="signature">32232323</div>
                </div>
                <div class="cancel-btn">
                    <Button type="info" round>取消关注</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import {Image, Button} from "element-ui";
    import DefaultHeader from "../../../../assets/default_head.jpeg";

    export default {
        name: "MyAttentionPeople",
        created() {
            this.queryAttentionList()
        },
        components: {
            MyImage: Image,
            Button
        },
        data() {
            return {
                DefaultHeader
            }
        },
        methods: {
            ...mapActions([
                "queryAttentionList"
            ])
        },
        computed: {
            ...mapState({
                attentionList: state => state.cPersonCenter.attention.attentionList
            })
        }
    }
</script>

<style scoped>
    .attention-list-box {

    }

    .attention-list {
        padding: 10px;
    }

    .attention-item {
        display: flex;
        border-bottom: 1px solid #ccc;
    }

    .header {
        flex-basis: 80px;
        min-width: 80px;
        max-width: 80px;
        height: 80px;
    }

    .desc {
        flex-grow: 1;
        height: 80px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 10px;
    }

    .name {

    }

    .signature {
        max-width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cancel-btn {
        line-height: 70px;
    }
</style>