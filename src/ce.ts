import CarteRessource from './components/CarteRessource.ce.vue';
import I18nHost from './components/I18nHost.ce.vue';
import LegendeRessource from './components/LegendeRessource.ce.vue';
import ListeRessources from './components/ListeRessources.ce.vue';
import PageRessource from './components/PageRessource.ce.vue';
import RechercheRessource from './components/RechercheRessource.ce.vue';
import { defineCustomElement } from 'vue';

customElements.define('carte-ressource', defineCustomElement(CarteRessource));
customElements.define('ui-ressources-gar', defineCustomElement(I18nHost));
customElements.define('legende-ressource', defineCustomElement(LegendeRessource));
customElements.define('liste-ressources', defineCustomElement(ListeRessources));
customElements.define('page-ressource', defineCustomElement(PageRessource));
customElements.define('recherche-ressource', defineCustomElement(RechercheRessource));
