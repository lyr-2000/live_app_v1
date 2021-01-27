<template>
    <teleport to="#modal">
        <transition name="slide-fade">
        <div class="modal d-block" tabindex="-1"  v-if="!close">
            <div class="modal-dialog" >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-md-left">{{title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"  @click="onClose">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            {{content}}
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary small text-white" data-dismiss="modal" @click="onClose">关闭</button>
                        <button type="button" class="btn btn-primary small text-white" @click="onConfirm">确认</button>
                    </div>
                </div>
            </div>
        </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import {Emit, Prop} from "vue-property-decorator";

    @Options({
        emits:['onClose','onOpen','onConfirm']
    })
    export default class Modal extends Vue {
        @Prop()
        title?:string = "title"
        @Prop()
        content?:string = "content"
        @Prop()
        close?:boolean = true

        @Emit("onClose")
        onClose() {
            this.close = true
        }
        @Emit("onOpen")
        onOpen() {
            this.close = false;
        }
        @Emit("onConfirm")
        onConfirm() {
            console.log("确认")
            this.close = true
        }
    }

</script>

<style scoped lang="scss">

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;
    }


</style>
