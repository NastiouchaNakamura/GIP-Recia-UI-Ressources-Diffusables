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
<style>
:root {
  /* Couleur par défaut de tout le texte */
  --ui-ressources-gar-default-text-color: #303030;
  --ui-ressources-gar-default-text-color-transparent: #30303080;

  /* Couleurs du header */
  --ui-ressources-gar-header-background-color: #25B2F3;
  --ui-ressources-gar-header-background-color-transparent: #25B2F380;
  --ui-ressources-gar-header-text-color: #FFFFFF;
  --ui-ressources-gar-header-text-color-transparent: #FFFFFF80;

  /* Couleur des titres des cartes de ressources */
  --ui-ressources-gar-ressources-title-color: var(--ui-ressources-gar-header-background-color);

  /* Couleurs des boutons */
  --ui-ressources-gar-button-background-color: var(--ui-ressources-gar-header-background-color);
  --ui-ressources-gar-button-background-color-transparent: var(--ui-ressources-gar-header-background-color-transparent);
  --ui-ressources-gar-button-text-color: var(--ui-ressources-gar-header-text-color);
  --ui-ressources-gar-button-text-color-transparent: var(--ui-ressources-gar-header-text-color-transparent);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--ui-ressources-gar-default-text-color);
}
</style>
