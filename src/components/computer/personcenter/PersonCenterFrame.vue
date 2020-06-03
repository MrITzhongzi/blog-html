<template>
    <div class="person-center-box">
        <div class="person-header-box">
            <PersonCenterHeader/>
        </div>
        <div class="person-conter-con">
            <div class="per-nav">
                <PersonCenterNav/>
            </div>
            <div class="per-con">
                <PersonCenterContent/>
            </div>

        </div>
    </div>
</template>

<script>
    import PersonCenterHeader from "./PersonCenterHeader";
    import PersonCenterNav from "./PersonCenterNav";
    import PersonCenterContent from "./PersonCenterContent";

    export default {
        name: "PersonCenterFrame",
        components: {
            PersonCenterHeader,
            PersonCenterNav,
            PersonCenterContent
        }
    }
</script>

<style scoped>
    .person-center-box {
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    .person-header-box {
        height: 250px;
        flex-basis: 250px;
    }
    .person-conter-con {
        display: flex;
        flex-grow: 1;
        width: 60%;
        margin: 0 auto;
        box-sizing: border-box;
        padding-bottom: 20px;
    }

    .per-nav {
        flex-basis: 200px;
    }

    .per-con {
        flex-grow: 1;
        border: 1px solid red;
    }
</style>