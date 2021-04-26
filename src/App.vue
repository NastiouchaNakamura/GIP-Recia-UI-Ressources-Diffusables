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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
