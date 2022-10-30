import { createApp } from 'vue';
import App from './App.vue';
import Router from './routes.js';
import Store from './store/index.js';
import Toaster from "@meforma/vue-toaster";
import './firebase.js';

const app = createApp(App);

app.use(Router);
app.use(Store);
app.use(Toaster);

app.mount('#app');
