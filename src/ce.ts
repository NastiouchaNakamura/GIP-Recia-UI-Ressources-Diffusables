import { defineCustomElement } from "vue";

import CarteRessource from "./components/CarteRessource.ce.vue";
import I18nHost from "./components/I18nHost.ce.vue";
import LegendeRessource from "./components/LegendeRessource.ce.vue";
import ListeRessources from "./components/ListeRessources.ce.vue";
import PageRessource from "./components/PageRessource.ce.vue";
import RechercheRessource from "./components/RechercheRessource.ce.vue";

const CarteRessourceCE = defineCustomElement(CarteRessource);
const I18nHostCE = defineCustomElement(I18nHost);
const LegendeRessourceCE = defineCustomElement(LegendeRessource);
const ListeRessourcesCE = defineCustomElement(ListeRessources);
const PageRessourceCE = defineCustomElement(PageRessource);
const RechercheRessourceCE = defineCustomElement(RechercheRessource);

customElements.define("carte-ressource-ce", CarteRessourceCE);
customElements.define("i18n-host-ce", I18nHostCE);
customElements.define("legende-ressource-ce", LegendeRessourceCE);
customElements.define("liste-ressources-ce", ListeRessourcesCE);
customElements.define("page-ressource-ce", PageRessourceCE);
customElements.define("recherche-ressource-ce", RechercheRessourceCE);
