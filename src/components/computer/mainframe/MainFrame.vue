<template>
    <div class="main-frame">
        <Header/>
        <div class="main-frame-con" :style="bgStyke">
            <Banner/>·
            <div class="user-article-box">
                <User/>
                <ArticleList/>
            </div>
            <Footer />
        </div>

    </div>
</template>

<script>
    import Header from "./Header";
    import Banner from "./Banner";
    import User from "./User";
    import ArticleList from "./ArticleList";
    import Footer from "./Footer";
    import MainFrameBg from "../../../assets/c_main_frame_bg.png";

    export default {
        name: "MainFrame",
        components: {
            Header, Banner, User, ArticleList, Footer
        },
        data(){
            return{
                MainFrameBg,
                bgStyke: {
                    backgroundImage: 'url(' + MainFrameBg + ')',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'top left',
                    backgroundRepeat: "no-repeat"
                }
            }
        }
    }
</script>

<style scoped>
    .main-frame {
        padding-top: 44px;
    }

    .main-frame-con {
        width: 80%;
        max-width: 1200px;
        min-width: 800px;
        margin: 0 auto;
    }

    .user-article-box {
        display: flex;
    }
</style>