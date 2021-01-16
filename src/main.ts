import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// require('videojs-contrib-hls/dist/videojs-contrib-hls.js');
// import VueVideoPlayer from 'vue-video-player'


createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
