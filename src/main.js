import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueI18n from "vue-i18n";

Vue.config.productionTip = false

// fontawesome
Vue.component('font-awesome-icon', FontAwesomeIcon);

// vue-i18n
// Ajouter les localisations dans les fichiers des composants.
Vue.use(VueI18n)
const i18n = new VueI18n(
    {
        locale: 'fr',
        fallbackLocale: 'fr',
        messages: {
            fr: {}
        }
    }
)

new Vue({
    i18n,
    render: h => h(App)
}).$mount('#app')
