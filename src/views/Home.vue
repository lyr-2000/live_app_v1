<template>
  <div class="home">

      <video id="player"  preload="auto" controls class="video-js vjs-default-skin vjs-big-play-centered">

          <p class="vjs-no-js">
              no support
          </p>
          <source src="http://localhost/hls/test/index.m3u8"  type="application/x-mpegURL" />

      </video>


  </div>
</template>

<script lang="ts">
import videojs from 'video.js'

import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'

import { Options, Vue } from "vue-class-component";


@Options({
  components: {

  }
})
export default class Home extends Vue {
    player:any

  mounted() {
      this.player = videojs('player',{
          width:1000,
          height:600
      });
      console.log(this.player)

  }

}
</script>
