import App from "./components/App";
import router from './router'
import axios from 'axios'

import {createApp} from 'vue';

const app = createApp(App);

app.use(router)
app.config.globalProperties.axios = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

app.mount('#app');