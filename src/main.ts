import 'regenerator-runtime/runtime.js';

import { createApp } from 'vue';

import './ce';

import i18n from './i18n';
import Toast from 'vue-toastification';

import './icons';
import 'vue-toastification/dist/index.css';

import AppDev from './AppDev.vue';
import App from './App.vue';

const app = createApp(import.meta.env.DEV ? AppDev : App);

app.use(i18n);
app.use(Toast);

if (import.meta.env.DEV) app.mount('#app');
