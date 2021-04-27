<template>
  <div class="cadre-liste-ressource">
    <header class="en-tete-liste-ressource">
      <h1 class="titre-en-tete-liste-ressource">Ressources diffusables</h1>
      <div class="separation-liste-ressource"></div>
      <p class="elements-affiches-liste-ressource">
        {{ ressources.length }}/{{ nombreRessourcesTotal }} ÉLÉMENTS AFFICHÉS
      </p>
    </header>
    <main class="liste-liste-ressource">
      <div v-if="ressources.length !== 0">
        <carte-ressource
            v-for="ressource in ressources"
            :key="ressource.idRessource"
            v-bind:ressource="ressource"
        />
        <div v-if="!lectureTerminee">
          <button v-on:click="getPageSuivante">Charger 20 de plus</button>
        </div>
      </div>
    </main>
    <footer>
      <div v-if="ressources.length === 0">
        <p>
          Aucune ressource ne correspond à votre recherche.
        </p>
      </div>
      <div v-if="chargement">
        <p>
          Chargement…
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { getRessourcesDiffusables, getSize } from '@/services/serviceRessourcesDiffusables'
import CarteRessource from "@/components/CarteRessource";

export default {
  name: "liste-ressources",
  components: {CarteRessource},
  props: {
    recherche: Object
  },
  data: function() {
    return {
      ressources: [],
      nombreRessourcesTotal: 0,
      pageSuivante: 0,
      lectureTerminee: false,
      chargement: false
    };
  },
  mounted() {
    this.recommencerRecherche();
  },
  methods: {
    getPageSuivante: function () {
      if (!this.lectureTerminee) {
        this.chargement = true;
        getRessourcesDiffusables(
            this.pageSuivante++,
            this.recherche.texte
        ).then(
            value => {
              this.ressources = this.ressources.concat(value);
              if (this.ressources.length === this.nombreRessourcesTotal) {
                this.lectureTerminee = true;
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
      this.chargement = true;
      getSize(
          this.recherche.texte
      ).then(
          value => {
            this.nombreRessourcesTotal = value;
            if (this.nombreRessourcesTotal === 0) {
              this.lectureTerminee = true;
              this.chargement = false;
            } else {
              this.lectureTerminee = false;
              this.getPageSuivante();
            }
          }
      );
    }
  }
}
</script>

<style scoped>
.cadre-liste-ressource {
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: thin solid lightgrey;
  box-shadow: 2px 2px 5px lightgrey;
}

.en-tete-liste-ressource {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #d91a7b;
  padding: 10px 20px 10px 20px;
  border-bottom: thin solid lightgrey;
  box-shadow: 0 2px 5px lightgrey;
}

.titre-en-tete-liste-ressource, .separation-liste-ressource, .elements-affiches-liste-ressource {
  margin-top: 0;
  margin-bottom: 0;
}

.titre-en-tete-liste-ressource {
  color: white;
}

.separation-liste-ressource {
  width: 1px;
  height: 100%;
  background-color: white;
  margin: 0 10px 0 10px;
}

.elements-affiches-liste-ressource {
  color: white;
}

.liste-liste-ressource {
  overflow: scroll;
}
</style>
