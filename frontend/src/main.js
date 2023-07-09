import { createApp } from 'vue'
import './style.css'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND
axios.defaults.headers['Access-Control-Allow-Origin'] = "*";
axios.defaults.headers['Content-Type'] = "application/json; charset=UTF-8";


createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
