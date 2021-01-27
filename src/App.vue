<template>
  <div id="website">
    <router-view></router-view>
    <modal />
    <loading />
  </div>

</template>
<script lang="ts">
  import Modal from "@/components/modal/Modal.vue";
  import Loading from '@/components/loading/Loading.vue';
  import {Options, Vue} from "vue-class-component";
  @Options({
    components:{
      Modal,Loading
    }
  })
  export default class App extends Vue{

  }
</script>

<style lang="scss">


</style>
