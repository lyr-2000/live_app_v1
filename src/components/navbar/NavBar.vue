<template>
    <nav class="nav">
        <div class="banner">
            <h1>biubiu 直播</h1>
        </div>
        <a class="nav-link active" aria-current="page" href="#">首页</a>
        <a class="nav-link" href="#">频道</a>
        <a class="nav-link" href="#">排行榜</a>
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">吐槽</a>


        <div class="search-bar  nav-link" v-show="inputShow">
            <form >
                <input type="text" class="search-inpu form-control">
                <button class="btn btn-warning"> <i class="fas fa-search"></i>搜索</button>
            </form>
        </div>

        <div class="login_link"  v-if="false">
            <router-link tag="a" to="/login"   class="nav-link">登录/注册</router-link>
        </div>
        <div class="avatar login_link" v-if="loginLinkShow">
            用户001
            <img src="https://tx-free-imgs.acfun.cn/style/image/defaultAvatar.jpg?imageslim" alt="">
        </div>

    </nav>
</template>

<script lang="ts">
    import { Options, Vue} from "vue-class-component";
    import {Emit, InjectReactive, Watch} from 'vue-property-decorator';
    // import {Log} from "@/common/aop/Log";

    @Options({})
    export default class NavBar extends Vue {
        fullWidth:number = document.body.clientWidth
        // @Watch("fullWidth")
        // onWindowResize() {
        //     console.log("屏幕变化了")
        // }
        mounted() {
            window.addEventListener('resize',()=>{
                this.fullWidth = document.body.clientWidth
            })

        }


        get inputShow():boolean{
            return this.fullWidth>876
        }
        get loginLinkShow():boolean {
            return this.fullWidth>=1525
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $nav-height : 51px;
    .nav{
        /*border: 1px solid black;*/
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
        width: 100%;
        height: $nav-height;
        line-height: 25px;
        margin: auto;
        & h1{
            font-size: 135%;
        }
        & .banner {
            height: $nav-height;
            margin-left: 162px;
            margin-right: 37px;
            margin-top: 8px;

        }
        & a {
            color: black;
        }

    }

    .search-bar {
        $search-bar-padding-bottom:5px;
        width: 300px;
        height: $nav-height;
        padding-bottom: $search-bar-padding-bottom;
        position: relative;
        form {

            top: 0;
            bottom: 0;

            & input {

                display: inline-block;
                width: 210px;
                height: 33px;

            }
            & button {
                position: absolute;
                display: inline-block;
                width: 81px;
                height: 33px;
                line-height: 12px;
                color: white;
            }
        }
    }
    .login_link {
        margin-left: 526px;
        & a:hover{
            color: red;
        }
    }

    .avatar img {
        border-radius: 48px;
        height: 39px
    }

</style>
