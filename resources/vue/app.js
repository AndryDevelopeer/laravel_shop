import App from "./components/App";
import router from './router'

import {createApp} from 'vue';

const app = createApp(App);

/*app.use(router)*/
app.mount('#app');