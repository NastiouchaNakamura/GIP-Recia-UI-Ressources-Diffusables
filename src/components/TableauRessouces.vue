<template>
  <div>
    <fieldset id="selectionRecherche">
      <legend>Recherche</legend>
      <p>
        <label>
          ID de la ressource :
          <input v-model.trim="recherche.idRessource" @change="recommencerRecherche" type="text">
        </label>
      </p>
      <p>
        <label>
          Nom de la ressource :
          <input v-model.trim="recherche.nomRessource" @change="recommencerRecherche" type="text">
        </label>
      </p>
      <p>
        <label>
          idEditeur :
          <input v-model.trim="recherche.idEditeur" @change="recommencerRecherche" type="text">
        </label>
      </p>
      <p>
        <label>
          distributeurCom :
          <input v-model.trim="recherche.distributeurCom" @change="recommencerRecherche" type="text">
        </label>
      </p>
      <p>
        <label>
          distributeurTech :
          <input v-model.trim="recherche.distributeurTech" @change="recommencerRecherche" type="text">
        </label>
      </p>
      <p>
        <label>
          Affichable :
          <select v-model="recherche.affichable" @change="recommencerRecherche">
            <option value="">Indifférent</option>
            <option value="true">Affichable</option>
            <option value="false">Non affichable</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Diffusable :
          <select v-model="recherche.diffusable" @change="recommencerRecherche">
            <option value="">Indifférent</option>
            <option value="true">Diffusable</option>
            <option value="false">Non diffusable</option>
          </select>
        </label>
      </p>
    </fieldset>
    <fieldset id="table">
      <legend>Liste des ressources</legend>
      <div v-if="ressources.length !== 0">
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
        <div v-if="!lectureTerminee">
          <button v-on:click="getPageSuivante">Charger 100 de plus</button>
        </div>
      </div>
      <div v-else>
        <p>
          Aucune ressource ne correspond à votre recherche.
        </p>
      </div>
    </fieldset>
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
      chargement: false,
      recherche: {
        idRessource: '',
        nomRessource: '',
        idEditeur: '',
        distributeurCom: '',
        distributeurTech: '',
        affichable: '',
        diffusable: ''
      }
    };
  },
  mounted() {
    this.recommencerRecherche();
  },
  methods: {
    afficher: function () {
      console.log(this.ressources);
    },
    getPageSuivante: function () {
      if (!this.lectureTerminee) {
        this.chargement = true;
        getRessourcesDiffusablesPage(
            this.pageSuivante++,
            this.recherche.idRessource,
            this.recherche.nomRessource,
            this.recherche.idEditeur,
            this.recherche.distributeurCom,
            this.recherche.distributeurTech,
            this.recherche.affichable,
            this.recherche.diffusable
        ).then(
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
      }
    },
    recommencerRecherche: function () {
      this.ressources = [];
      this.pageSuivante = 0;
      this.lectureTerminee = false;
      this.getPageSuivante();
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

table, legend {
  font-size: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>
