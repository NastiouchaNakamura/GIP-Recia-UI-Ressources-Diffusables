import CarteRessource from "./components/CarteRessource.ce.vue";
import I18nHost from "./components/I18nHost.ce.vue";
import LegendeRessource from "./components/LegendeRessource.ce.vue";
import ListeRessources from "./components/ListeRessources.ce.vue";
import PageRessource from "./components/PageRessource.ce.vue";
import RechercheRessource from "./components/RechercheRessource.ce.vue";
import { defineCustomElement } from "vue";

customElements.define(
  "carte-ressource-ce",
  defineCustomElement(CarteRessource)
);
customElements.define("i18n-host-ce", defineCustomElement(I18nHost));
customElements.define(
  "legende-ressource-ce",
  defineCustomElement(LegendeRessource)
);
customElements.define(
  "liste-ressources-ce",
  defineCustomElement(ListeRessources)
);
customElements.define("page-ressource-ce", defineCustomElement(PageRessource));
customElements.define(
  "recherche-ressource-ce",
  defineCustomElement(RechercheRessource)
);
