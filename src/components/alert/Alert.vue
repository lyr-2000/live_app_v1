<template>
    <transition
            name="fade"
            enter-active-class="animate_animated animate__slideInLeft"
            leave-active-class="animate__animated animate__slideOutLeft"
    >
        <div  v-show="show" class="alert " :class="style" :style="{width:width+'px',height:height+'px'}" role="alert">
            <slot>{{content}}</slot>

            <button @click="onClose" type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </transition>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import {Emit, Prop} from "vue-property-decorator";

    @Options({
        emits:['onClose']
    })
    export default class Alert extends Vue {
        @Prop()
        content?:string = "this is content"
        //风格
        @Prop()
        style?:string = "alert-primary"
        @Prop()
        width = 185
        @Prop()
        height = 50
        @Prop()
        show = false
        @Emit('onClose')
        onClose() {
            // this.show = false
            // console.log('点击了')
        }

    }
</script>

<style scoped lang="scss">
    .alert{
        position: relative;
        .close {
            position: absolute;
            top: 2px;
            right: 5px;
        }
    }
</style>
