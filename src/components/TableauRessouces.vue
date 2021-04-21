<template>
  <div> <!-- @scroll="onScroll" -->
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
    <div v-if="chargement">
      <small>
        Chargement
      </small>
    </div>
    <div>
      <button v-on:click="getPageSuivante">Page supplémentaire</button>
    </div>
  </div>
</template>

<script>
import { getRessourcesDiffusablesPage } from '@/services/serviceRessourcesDiffusables'

export default {
  name: 'TableauRessouces',
  data: function() {
    return {
      ressources: [],
      pageSuivante: 0,
      lectureTerminee: false,
      chargement: false
    };
  },
  mounted() {
    this.getPageSuivante();
    this.scroll();
  },
  methods: {
    afficher: function () {
      console.log(this.ressources);
    },
    getPageSuivante: function () {
      if (!this.lectureTerminee) {
        this.chargement = true;
        getRessourcesDiffusablesPage(this.pageSuivante++).then(
            value => {
              if (value.length === 0) {
                this.lectureTerminee = true;
              } else {
                this.ressources = this.ressources.concat(value);
              }
            }
        ).finally(
            () => {
              this.chargement = false;
            }
        )
      } else {
        alert('done');
      }
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.getPageSuivante(); // replace it with your code
        }
      }
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
