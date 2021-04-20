<template>
  <div>
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
        }
      ]
    };
  },
  mounted() {
    getRessourcesDiffusablesPage(0).then(
        (value) => {
          alert(value);
          this.ressources = this.ressources.concat(value);
        }
    );
  }
}
</script>

<style scoped>

</style>
