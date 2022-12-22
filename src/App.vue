<template>
  <div id="app">
    <page-ressource />
  </div>
</template>

<script>
import PageRessource from "@/components/PageRessource.vue";

export default {
  name: "app",
  components: {
    PageRessource,
  },
};
</script>

<!-- Variables définies dans le skin du portail.
<style>
/* Variables */
#app {
  /* Couleur par défaut de tout le texte */
  --ui-ressources-gar-default-text-color: #303030;

  /* Couleurs du header */
  --ui-ressources-gar-header-background-color: #25B2F3;
  --ui-ressources-gar-header-text-color: #FFFFFF;

  /* Couleur des titres des cartes de ressources */
  --ui-ressources-gar-ressources-title-color: #25B2F3;

  /* Couleurs des boutons */
  --ui-ressources-gar-button-background-color: #0C9EE1;
  --ui-ressources-gar-button-text-color: #FFFFFF;
}
</style>
-->

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--ui-ressources-gar-default-text-color);
}
</style>
