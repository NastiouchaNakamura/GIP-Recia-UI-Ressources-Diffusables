<template>
  <div>
    <div>
      <button v-on:click="afficher">Logguer ressources</button>
    </div>
    <table>
      <thead>
      <tr>
        <th>
          ID
        </th>
        <th>
          Ressource
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="ressource in ressources" :key="ressource.idRessource">
        <td>
          {{ ressource.idRessource }}
        </td>
        <td>
          {{ ressource.nomRessource }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getRessourcesDiffusablesPage } from '@/services/serviceRessourcesDiffusables'

export default {
  name: 'TableauRessouces',
  data: function() {
    return {
      ressources: [
        {
          idRessource: '0',
          nomRessource: '0'
        },
        {
          idRessource: '1',
          nomRessource: '1'
        },
        {
          idRessource: '2',
          nomRessource: '2'
        }
      ]
    };
  },
  mounted() {
    getRessourcesDiffusablesPage(0).then(value => this.ressources = this.ressources.concat(value));
  },
  methods: {
    afficher: function () {
      console.log(this.ressources);
    }
  }
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}

th, td {
  min-width: 50px;
}

table {
  font-size: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>
