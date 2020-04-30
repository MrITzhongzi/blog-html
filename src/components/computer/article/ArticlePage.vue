<template>
    <div class="article-page">
        <Pagination
                background
                layout="prev, pager, next"
                :page-size="10"
                :total="total"
                @size-change="pageChange"
                @current-change="currentChange"
                @prev-click="prevPage"
                @next-click="nextPage">
        </Pagination>
    </div>
</template>

<script>
    import {Pagination} from 'element-ui';
    export default {
        name: "ArticlePage",
        props:["total", "changePage"],
        components: {
            Pagination
        },
        methods: {
            /**
             * 总条目改变时调用
             * @param params
             */
            pageChange(params){
                console.log("pageChange", params);
            },
            currentChange(params){
                console.log("currentChange", params);
                this.changePage(params);
            },
            prevPage(params){
                console.log("prevPage", params);
                this.changePage(params);
            },
            nextPage(params){
                console.log("nextpage", params);
                this.changePage(params);
            }
        }
    }
</script>

<style scoped>
.article-page {
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 100%;
}
</style>