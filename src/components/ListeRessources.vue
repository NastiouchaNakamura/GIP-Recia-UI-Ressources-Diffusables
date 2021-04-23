<template>
  <div class="cadre">
    <header class="en-tete">
      <h1 class="titre-en-tete">Ressources diffusables</h1>
      <div class="separation"></div>
      <p>
        {{ ressources.length }}/{{ nombreRessourcesTotal }} ÉLÉMENTS AFFICHÉS
      </p>
    </header>
    <main class="liste">
      <div v-if="ressources.length !== 0">
        <carte-ressource
            v-for="ressource in ressources"
            :key="ressource.idRessource"
            v-bind:ressource="ressource"
        ></carte-ressource>
        <div v-if="!lectureTerminee">
          <button v-on:click="getPageSuivante">Charger 100 de plus</button>
        </div>
      </div>
    </main>
    <footer>
      <div v-if="lectureTerminee && !chargement">
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
            this.recherche.idRessource,
            this.recherche.nomRessource,
            this.recherche.idEditeur,
            this.recherche.distributeurCom,
            this.recherche.distributeurTech,
            this.recherche.affichable,
            this.recherche.diffusable
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
          this.recherche.idRessource,
          this.recherche.nomRessource,
          this.recherche.idEditeur,
          this.recherche.distributeurCom,
          this.recherche.distributeurTech,
          this.recherche.affichable,
          this.recherche.diffusable
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
.cadre {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.liste {
  overflow: scroll;
}
</style>
