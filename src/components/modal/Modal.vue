<template>
    <teleport to="#modal">
        <div id="center" v-if="loadingStatus">
            <h2> <slot>友情提示</slot> </h2>
        </div>
    </teleport>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import {Emit} from "vue-property-decorator";
    //
    // import {store,Loading} from '@/store'
    // import {getModule} from "vuex-module-decorators";
    // import { loadingModule } from '@/store/modules/Loading.ts'
    @Options({})
    export default class Modal extends Vue {
        // @Emit('close-modal')
        // closeModal(payload: string) {
        //     return payload == 'close';
        // }
        // // loading = getModule(Loading,store);
        //
        // mounted() {
        //     // setTimeout(()=>{
        //     //     loadingModule.setLoading(false)
        //     // },4000)
        //
        // }
        get loadingStatus():boolean {
            return false;
            // return this.loading.loadingStatus;
        }

    }

</script>

<style scoped lang="scss">

</style>
