import 'regenerator-runtime/runtime.js';

import { createApp } from 'vue';

import { register } from './ce';
register();

import i18n from './i18n';

import './icons';

import AppDev from './AppDev.vue';
import App from './App.vue';

const app = createApp(import.meta.env.DEV ? AppDev : App);

app.use(i18n);

if (import.meta.env.DEV) app.mount('#app');
