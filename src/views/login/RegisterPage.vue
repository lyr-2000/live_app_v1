<template>
    <nav-bar/>
    <div id="background_body">
        注册页面

        <div class="register-form">
            <form >
                <section class="top-banner">
                    <section class="left"><h2>biubiu注册</h2></section>
                    <section class="right"><router-link to="/login" tag="a">返回登录</router-link></section>
                </section>
                <section class="field">
                    <i class="iconfont  icon-email"></i>
                    <input type="text" class="email-input" placeholder="输入邮箱">
                    <i class="iconfont  icon-smile"></i>
                    <input type="text" class="nickname-input" placeholder="输入昵称">
                    <i class="iconfont  icon-key"></i>
                    <input type="password" class="pwd-input" placeholder="输入密码">
                    <i class="iconfont  icon-safe"></i>
                    <input type="text" class="vcode-input" placeholder="输入验证码">

                </section>
                <section class="btn-field">
                    <div class="login-button">注册</div>
                </section>
                <section class="read-it"></section>
            </form>
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
    export default class RegisterPage extends Vue {


    }
</script>

<style scoped lang="scss">
    @import "@/assets/style/layout.scss";
    @import "@/assets/style/component.scss";

    $body-height: 700px;
    $input-width: 325px;
    $input-height: 39px;
    #background_body{
        height: $body-height;
        background-image: url("https://static.yximgs.com/udata/pkg/acfun/loginbg.be7a2d2876ab48ed.png");
        background-repeat: no-repeat;
        position: relative;
    }

    .register-form {
        @include login_form;
        width: 442px;
        height: 525px;
        position: absolute;
        right: 312px;
        top: 90px;
        & .top-banner{
            @include flex-row-between;
            padding: 34px 33px 12px 33px;

            & .right{
                margin-top: 8px;
            }
        }
        & .iconfont {
            position: absolute;
            left: 52px;
            margin-top: 12px;

            &.icon-smile {
                margin-top: 38px;
            }
            &.icon-key {
                margin-top: 36px;
            }
            &.icon-safe {
                margin-top: 36px;
            }

        }
        & input {
            @include login_input;
            width: 361px;
            height: 44px;
            margin: auto;
            margin-top: 26px;
        }
        & .btn-field {
            text-align: center;
            .login-button {
                @include login_btn;
                margin: auto;
                margin-top: 26px;
                width: 361px;
            }
        }
    }
</style>
