import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store  } from "./store";
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// require('videojs-contrib-hls/dist/videojs-contrib-hls.js');
// import VueVideoPlayer from 'vue-video-player'
//bootstrap 和  jquery
import 'jquery/dist/jquery.min'

import 'bootstrap/dist/css/bootstrap.css'

// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/main.css'

import '@/assets/icon/iconfont.css'

import axios from "axios";
import {apiUrl} from "@/common/config";
import {loadingModule} from '@/store/modules/Loading.ts'

// import videojs from "video.js";
// import use = videojs.use;

axios.defaults.baseURL = apiUrl
axios.interceptors.request.use(config => {
    loadingModule.setLoading(true)
    return config
},err =>{
    setTimeout(()=>{

     loadingModule.setLoading(false)
    },3000)
    return Promise.reject(err)
})
axios.interceptors.response.use(config => {
    loadingModule.setLoading(false)
    return config
},error => {
    setTimeout(()=>{
        loadingModule.setLoading(false);
    },3000)
    return Promise.reject(error)
})

const app = createApp(App)
  .use(store)
  .use(router)
  // .use(animate)


app.mount("#app");






