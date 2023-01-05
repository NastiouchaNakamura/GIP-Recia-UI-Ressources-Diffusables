import Vue from "vue";
import App from "@/components/App.vue";
import i18n from "@/i18n";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import "regenerator-runtime/runtime.js";

Vue.config.productionTip = false;

Vue.use(Toast);

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
