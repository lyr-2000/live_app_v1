<template>
    <nav-bar />
    <div id="background_body">
        <div class="login-form">
            <div class="banner"><h2>biubiu 直播账号登录</h2></div>
            <form action="" class="login_pass">
                <i class="iconfont  icon-smile-wink"></i>
                <input type="text" class="email-input">
                <i class="iconfont icon-yuechi"></i>
                <input type="password" class="pwd-input">

                <div class="login-btn">登录</div>
            </form>
            <div class="guide-nav">
                <a class="left">&nbsp;&nbsp;&nbsp;帮助手册</a>
                <div class="right">
                    <a class="forgetpwd">忘记密码 &nbsp;&nbsp;&nbsp;</a>
                    <router-link tag="a" to="/register" class="reg">&nbsp;&nbsp;立即注册&nbsp;&nbsp;&nbsp;</router-link>
                </div>
            </div>
        </div>

    </div>

</template>

<script lang="ts">
    import NavBar from '@/components/navbar/NavBar.vue';
    import { Options, Vue} from "vue-class-component";


    @Options({
        components:{
            NavBar
        }

    })
    export default class LoginPage extends Vue {


    }
</script>

<style  lang="scss" scoped>
    @import '@/assets/style/layout.scss';
    @import '@/assets/style/component.scss';


    $body-height: 700px;
    $input-width: 325px;
    $input-height: 39px;
    #background_body{
        height: $body-height;
        background-image: url("https://static.yximgs.com/udata/pkg/acfun/loginbg.be7a2d2876ab48ed.png");
        background-repeat: no-repeat;
        position: relative;
    }

    .banner{
        left: 37px;
        top: 28px;
        position: absolute;
    }

    .login-form {
        width: 435px;
        height: 431px;
        /*border: 1px solid red;*/
        background: white;
        border-radius: 10px;
        position: absolute;
        top: 85px;
        right: 329px;
        left: 926px;

        &   input  {
            margin: 116px 58px 0px 58px;
            border-radius: 6px;
            border: 1px solid #ced4da;
            /*margin-top: 116px;*/

            width: 326px;
            height: 41px;
            display: block;
            padding-left: 40px;

        }
        & input:focus {
            border: 1px solid red;
        }
        & input.pwd-input {
            margin-top: 16px;
        }

        & .iconfont{
            position: absolute;
            left: 65px;
            font-size: 28px;
            color: gray;
        }
        & .icon-yuechi{
            position: absolute;
            top: 173px;
        }
        & .login-btn:hover {
            background-color: #ec4556;
        }
        & .login-btn {
            width: $input-width;
            height: $input-height;
            position: relative;
            top: 21px;
            left: 5px;


            margin-left: 50px;
            margin-right: 50px;
            text-align: center;
            color: white;
            background: #ff6b6b;
            margin-top: 30px;
            margin-left: 60px;


            line-height: $input-height;
            font-size: 16px;
            color: #fff;
            background-color: #fd4c5b;
            border-radius: 5px;
            text-align: center;
            margin: 0 auto;
            cursor: pointer;
        }
        $parent-width: 431px;

        & .guide-nav {
            width: $parent-width;
            position: absolute;
            bottom: 0px;
            margin-bottom: 9px;

            @include flex-row-between;
            & a{
                @include a-link-color;
            }
            & a:hover{
                @include a-link-hover-red
            }

            & .right{
                @include flex-row;
            }
        }
    }

</style>
