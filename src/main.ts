import 'regenerator-runtime/runtime.js';

import { createApp } from 'vue';

import { register as registerCustomElements } from '@/ce.ts';
import { register as registerFontAwsome } from '@/plugins/fontawsome.ts';
import i18n from '@/plugins/i18n.ts';

import AppDev from '@/AppDev.vue';
import App from '@/App.vue';

const app = createApp(import.meta.env.DEV ? AppDev : App);

registerCustomElements();
registerFontAwsome();

app.use(i18n);

if (import.meta.env.DEV) app.mount('#app');
