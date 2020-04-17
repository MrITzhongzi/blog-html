<template>
    <div class="banner">
        <div class="banner-sign">
            <div class="banner-name">
                ITzhongzi的博客
            </div>
            <div class="banner-desc">
                不管前方的路有多远和多苦，只要走的方向是正确的，都比站在原地更接近幸福。
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
.banner {
    height: 200px;
    box-sizing: border-box;
    position: relative;
}
    .banner-sign {
        position: absolute;
        bottom: 30px;
        left: 20px;
    }
    .banner-name {
        font-size: 30px;
        font-weight: 900;
    }
    .banner-desc {
        margin-top: 10px;
    }
</style>