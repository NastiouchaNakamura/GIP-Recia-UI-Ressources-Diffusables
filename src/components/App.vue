<template>
  <div id="app">
    <page-ressource/>
  </div>
</template>

<script>
import PageRessource from './PageRessource';

export default {
  name: 'app',
  components: {
    PageRessource
  }
}
</script>

<style lang="scss" module>
/* Variables */

/* Couleur par défaut de tout le texte */
$ui-ressources-gar-default-text-color: #303030;

/* Couleur du portail */
$ui-ressources-gar-portal-color: #25B2F3;

/* Texte sur la couleur du portail */
$ui-ressources-gar-portal-text-color: #FFFFFF;

#app {
  /* Couleur par défaut de tout le texte */
  --ui-ressources-gar-default-text-color: $ui-ressources-gar-default-text-color;

  /* Couleurs du header */
  --ui-ressources-gar-header-background-color: $ui-ressources-gar-portal-color;
  --ui-ressources-gar-header-text-color: $ui-ressources-gar-portal-text-color;

  /* Couleur des titres des cartes de ressources */
  --ui-ressources-gar-ressources-title-color: $ui-ressources-gar-portal-color;

  /* Couleurs des boutons */
  --ui-ressources-gar-button-background-color: darken($ui-ressources-gar-portal-color, 0.5);
  --ui-ressources-gar-button-text-color: $ui-ressources-gar-portal-text-color;
}
</style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--ui-ressources-gar-default-text-color);
}
</style>
