import 'regenerator-runtime/runtime.js';

import { createApp } from 'vue';
import App from './App.vue';

import './ce';

import i18n from './i18n';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

createApp(App).use(i18n).use(Toast);
