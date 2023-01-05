import App from "./components/App.vue";
import store from "./store";
import router from './router';
import axios from 'axios';
import {createApp} from 'vue';
import {VueMaskDirective} from 'v-mask';

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};

const app = createApp(App)
    .directive('mask', vMaskV3);

app.use(store)
app.use(router)
app.config.globalProperties.axios = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

app.mount('#app');

/*
v-mask
#	Number (0-9)
A	Letter in any case (a-z,A-Z)
N	Number or letter (a-z,A-Z,0-9)
X	Any symbol
?	Optional (next character)
*/