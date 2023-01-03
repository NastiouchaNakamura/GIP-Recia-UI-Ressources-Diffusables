<template>
  <div id="app">
    <header>
      <extended-uportal-header
        domain=""
        :service-name="t('ressources-diffusables')"
        context-api-url="/portail"
        sign-out-url="/portail/Logout"
        default-org-logo-path="/annuaire_images/default_banner_v1.jpg"
        default-avatar-path="/images/icones/noPictureUser.svg"
        default-org-icon-path="/images/partners/netocentre-simple.svg"
        favorite-api-url="/portail/api/layout"
        layout-api-url="/portail/api/v4-3/dlm/layout.json"
        organization-api-url="/change-etablissement/rest/v2/structures/structs/"
        portlet-api-url="/portail/api/v4-3/dlm/portletRegistry.json?category=All%20categories"
        user-info-api-url="/portail/api/v5-1/userinfo?claims=private,name,ESCOSIRENCourant,ESCOSIREN&groups="
        user-info-portlet-url="/portail/p/ESCO-MCE"
        template-api-path="/commun/portal_template_api.tpl.json"
        switch-org-portlet-url="/portail/p/etablissement-swapper"
        favorites-portlet-card-size="small"
        grid-portlet-card-size="auto"
        hide-action-mode="never"
        show-favorites-in-slider="true"
        return-home-title="Aller à l'accueil"
        return-home-target="_self"
        icon-type="nine-square"
      >
      </extended-uportal-header>
    </header>
    <main>
      <page-ressource />
    </main>
    <footer>
      <extended-uportal-footer
        domain=""
        template-api-path="/commun/portal_template_api.tpl.json"
      >
      </extended-uportal-footer>
    </footer>
  </div>
</template>

<script>
import PageRessource from "@/components/PageRessource.vue";
import i18n from "@/i18n";

export default {
  name: "app",
  components: {
    PageRessource,
  },
  methods: {
    t: function (key) {
      return i18n.t(`message.${this.$options.name}.${key}`); // 'message.page-ressource.{key}
    },
  },
  beforeCreate() {
    let extendedUportalHeaderScript = document.createElement("script");
    extendedUportalHeaderScript.setAttribute(
      "src",
      "/commun/extended-uportal-header.min.js"
    );
    document.head.appendChild(extendedUportalHeaderScript);
    let extendedUportalFooterScript = document.createElement("script");
    extendedUportalFooterScript.setAttribute(
      "src",
      "/commun/extended-uportal-footer.min.js"
    );
    document.head.appendChild(extendedUportalFooterScript);
  },
};
</script>

<!-- Variables définies dans le skin du portail. -->
<!-- <style>
/* Variables */
#app {
  /* Couleur par défaut de tout le texte */
  --ui-ressources-gar-default-text-color: #303030;

  /* Couleurs du header */
  --ui-ressources-gar-header-background-color: #25b2f3;
  --ui-ressources-gar-header-text-color: #ffffff;

  /* Couleur des titres des cartes de ressources */
  --ui-ressources-gar-ressources-title-color: #25b2f3;

  /* Couleurs des boutons */
  --ui-ressources-gar-button-background-color: #0c9ee1;
  --ui-ressources-gar-button-text-color: #ffffff;
}
</style> -->

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--ui-ressources-gar-default-text-color);
  background-color: #f0f0f0;
}
</style>
