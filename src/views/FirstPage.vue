<template>
    <div>
        <nav-bar   />
<!--        sfsfaf-->
            首页
<!--        <alert width="355" :show="show" content="登录成功" @onClose="close"/>-->

    </div>
</template>

<script lang="ts">
    import NavBar from '@/components/navbar/NavBar.vue';
    import { Options, Vue} from "vue-class-component";
    import {ProvideReactive, Watch} from "vue-property-decorator";
    import Alert from "@/components/alert/Alert.vue";
    @Options({
        components:{
            NavBar
        }

    })
    export default class FirstPage extends Vue {
        fullWidth = document.body.clientWidth
        // show = true
        // close() {
        //     this.show = false
        //
        // }
    }
</script>

<style>

</style>
