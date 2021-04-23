<template>
  <div id="app">
    <TableauRessources/>
  </div>
</template>

<script>
import TableauRessources from './components/TableauRessouces'

export default {
  name: 'App',
  components: {
    TableauRessources
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
