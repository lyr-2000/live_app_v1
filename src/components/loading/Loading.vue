<template>
    <teleport to="#loadingMask">
        <section class="mask loading-container" v-show="loadingStatus">

           <section class="loading-content">
               <div class="loading-icon spinner-border text-primary" role="status">
                   <span class="sr-only">拼命加载中...</span>
               </div>
               <p class="text-primary small">拼命加载中</p>
           </section>

        </section>
    </teleport>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import {loadingModule} from "@/store/modules/Loading";

    @Options({})
    export default class Loading extends Vue {

        get loadingStatus() {
            return loadingModule.loadingStatus;
        }



    }
</script>

<style scoped lang="scss">
    @import "@/assets/style/layout.scss";
    .mask {
        @include flex-row;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .loading-container {
        background: rgb(0,0,0,.5);
        z-index:100;
        position: fixed;
        width: 100%;
        height: 100%;
        text-align: center;
        left: 0;
        top: 0;
    }
</style>
