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
#app {
  /* Variables */
  --default-text-color: #2c3e50; /* Sur fond blanc */
  --default-text-color-transparent: #2c3e5080;
  --main-color: #d91a7b; /* Header */
  --main-over-color: white; /* Texte sur --main-color */
  --main-text-color: var(--main-color); /* Titre des ressources */
  --secondary-color: #303364; /* Boutons */
  --secondary-color-transparent: #30336480;
  --secondary-over-color: white; /* Texte sur --secondary-color */
  --secondary-over-color-transparent: #FFFFFF80;

  /* Style */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--default-text-color);
}
</style>
