import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// require('videojs-contrib-hls/dist/videojs-contrib-hls.js');
// import VueVideoPlayer from 'vue-video-player'
//bootstrap 和  jquery
import 'jquery/dist/jquery.min'

import 'bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/main.css'

import '@/assets/icon/iconfont.css'
// import '@/assets/icon/iconfont.eot'

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
