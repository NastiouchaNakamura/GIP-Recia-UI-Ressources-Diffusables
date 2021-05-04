<template>
  <div id="app">
    <PageRessource/>
  </div>
</template>

<script>
import PageRessource from './components/PageRessource'

export default {
  name: 'App',
  components: {
    PageRessource
  }
}
</script>

<style>
#app {
  /* Variables */
  --default-text-color: #2c3e50; /* Sur fond blanc */
  --main-color: #d91a7b; /* Header */
  --main-over-color: white; /* Texte sur --main-color */
  --main-text-color: var(--main-color); /* Titre des ressources */
  --secondary-color: #303364; /* Boutons */
  --secondary-over-color: white; /* Texte sur --secondary-color */

  /* Style */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--default-text-color);
}
</style>
