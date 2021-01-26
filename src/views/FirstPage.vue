<template>
    <div>
        <nav-bar   />
<!--        sfsfaf-->
            首页

    </div>
</template>

<script lang="ts">
    import NavBar from '@/components/navbar/NavBar.vue';
    import { Options, Vue} from "vue-class-component";
    import {ProvideReactive, Watch} from "vue-property-decorator";

    @Options({
        components:{
            NavBar
        }

    })
    export default class FirstPage extends Vue {
        fullWidth = document.body.clientWidth


    }
</script>

<style>

</style>
