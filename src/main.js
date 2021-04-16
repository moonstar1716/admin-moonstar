import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 配置请求的跟路径
axios.defaults.baseURL = '/'
const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount('#app')
