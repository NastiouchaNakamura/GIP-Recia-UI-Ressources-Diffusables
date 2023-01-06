import { createApp } from "vue";
import App from "@/App.ce.vue";
import i18n from "@/i18n";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "regenerator-runtime/runtime.js";

createApp(App).use(i18n).use(Toast).mount("#app");
