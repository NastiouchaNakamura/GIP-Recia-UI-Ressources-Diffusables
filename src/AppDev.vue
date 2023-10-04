<script setup lang="ts">
const {
  VITE_BASE_API_URL,
  VITE_RESSOURCES_DIFFUSABLES_API_URI,
  VITE_RESSOURCES_DIFFUSABLES_SIZE_API_URI,
  VITE_USER_INFO_API_URI,
} = import.meta.env;
</script>

<template>
  <ui-ressources-gar
    :base-api-url="VITE_BASE_API_URL"
    :ressources-diffusables-api-uri="VITE_RESSOURCES_DIFFUSABLES_API_URI"
    :ressources-diffusables-size-api-uri="VITE_RESSOURCES_DIFFUSABLES_SIZE_API_URI"
    :user-info-api-url="VITE_USER_INFO_API_URI"
  />
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

/* Variables */
:root {
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

  /* Mise en forme */
  --ui-ressources-gar-button-border-radius: 24px;
  --ui-ressources-gar-card-border-radius: 16px;
  --ui-ressources-gar-padding: 16px;

  background-color: #f3f3f3;
}
</style>
