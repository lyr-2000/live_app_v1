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
                    <input type="text" class="email-input" placeholder="输入邮箱" v-model="email">
                    <i class="iconfont  icon-smile"></i>
                    <input type="text" class="nickname-input" placeholder="输入昵称" v-model="nickname">
                    <i class="iconfont  icon-key"></i>
                    <input type="password" class="pwd-input" placeholder="输入密码" v-model="password">
                    <i class="iconfont  icon-safe"></i>
                    <input type="text" class="vcode-input" placeholder="输入验证码" v-model="code">
                    <a href="javascript:void(0)" @click.prevent="getCode" class="get-code" v-show="!prevent">获取验证码</a>
                    <a class="get-code countdown" v-show="prevent">{{countdownSecond}}</a>
                </section>
                <section class="btn-field">
                    <div class="login-button" @click="registerUser">注册</div>
                </section>
                <section class="read-it"></section>
            </form>
        </div>

    </div>
</template>

<script lang="ts">
    import NavBar from '@/components/navbar/NavBar.vue';
    import { Options, Vue} from "vue-class-component";
    import { getCode,registerByCode } from '@/common/api/useRegisterUser.ts'
    import RegisterUser from "@/common/domain/RegisterUser";
    import {Result} from "@/common/domain/Result";

    @Options({
        components:{
            NavBar
        }

    })

    /*
    * {
  "code": 200,
  "message": "ok",
  "data": {
    "id": 34,
    "nickname": "666",
    "account": "4083361810949683630",
    "email": "1957476540@qq.com"
  }
}
    *
    * */
    export default class RegisterPage extends Vue {

        email="";
        nickname=""
        password = ""
        //验证码
        code = ""

        id?:number

        prevent= false
        //注册-> 跳转登录页面
        registerUser() {
            registerByCode({
                id:this.id,
                code:this.code
            }).then(res=>{
                const data = res.data
                console.log(data)
                if (data.code==200) {
                    console.log("登录成功")
                    this.$router.push({
                        path:"/login"
                    })
                }
            })
        }
        //获取验证码
        getCode() {
            // console.log(this.email)

            getCode({
                email:this.email,
                nickname:this.nickname,
                password:this.password,

            }).then(resp =>{
                 const data = resp.data
                 if (data.code==200)this.id = data.data.id;
                 else{
                     console.log("请求失败")
                 }
                 this.prevent = true
                this.countDown()
            }).catch(err=>{
                this.prevent = true
                this.countDown()
            })


        }
        countdownSecond = 60
        //屏蔽，防止重新点击验证码
        countDown() {
            this.countdownSecond = 60
            const timer = setInterval(()=>{
                if (this.countdownSecond>=1) {
                    this.countdownSecond--;
                }else{
                    this.prevent = false

                    clearInterval(timer);
                }
            },1000)

        }

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
                & a:hover {
                    text-decoration: none;
                }
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
            .login-button:hover {
                background-color: #ec4556;
            }
        }

        & a.get-code {
            @include a-link-color;
            position: absolute;
            right: 58px;
            bottom: 171px;
        }
        & a.get-code:hover{
            @include a-link-hover-red;
        }
        & a.countdown {
            color: blue;
        }

    }
</style>
