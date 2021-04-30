<template>
  <div class="cadre-page-ressource">
    <header class="en-tete-page-ressource">
      <h1 class="titre-en-tete-page-ressource">Ressources diffusables</h1>
    </header>
    <main class="main-page-ressource">
      <recherche-ressource
          v-bind:recherche="recherche"
          v-bind:nombreRessourcesTotal="nombreRessourcesTotal"
          v-bind:nombreRessourcesAffichees="ressources.length"
          ref="rechercheRessource"
          class="recherche-ressource-page-ressource"
      />
      <liste-ressources
          v-bind:ressources="ressources"
          v-bind:lectureTerminee="lectureTerminee"
          v-bind:chargement="chargement"
          ref="listeRessource"
          class="liste-ressource-page-ressource"
      />
    </main>
  </div>
</template>

<script>
import ListeRessources from "@/components/ListeRessources";
import RechercheRessource from "@/components/RechercheRessource";
import {getRessourcesDiffusables, getSize} from "@/services/serviceRessourcesDiffusables";

export default {
  name: 'page-ressource',
  components: {
    rechercheRessource: RechercheRessource,
    listeRessources: ListeRessources
  },
  data: function() {
    return {
      ressources: [],
      nombreRessourcesTotal: 0,
      pageSuivante: 0,
      lectureTerminee: false,
      chargement: false,
      recherche: ''
    };
  },
  mounted() {
    this.recommencerRecherche();
  },
  methods: {
    reinitialiserRecherche: function () {
      this.recherche = '';
      this.recommencerRecherche();
    },
    recommencerRechercheInput: function (rechercheInput) {
      this.recherche = rechercheInput;
      this.recommencerRecherche()
    },
    recommencerRecherche: function () {
      this.ressources = [];
      this.pageSuivante = 0;
      this.chargement = true;
      getSize(
          this.recherche
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
    },
    getPageSuivante: function () {
      if (!this.lectureTerminee) {
        this.chargement = true;
        getRessourcesDiffusables(
            this.pageSuivante++,
            this.recherche
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
    }
  }
}
</script>

<style scoped>

.cadre-page-ressource {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: calc(100vh - 180px);
  max-height: calc(100vh - 180px);
}

.en-tete-page-ressource {
  background-color: #d91a7b;
  padding: 10px 20px 10px 20px;
  border-bottom: thin solid lightgrey;
  box-shadow: 0 2px 5px lightgrey;
}

.titre-en-tete-page-ressource {
  margin-top: 0;
  margin-bottom: 0;
  color: white;
}

.main-page-ressource {
  display: flex;
  flex-direction: row;
  height: calc(100% - 70px);
}

.recherche-ressource-page-ressource {
  max-width: 20vw;
  width: 100%;
}

.liste-ressource-page-ressource {
  max-width: 80vw;
  width: 100%;
}

@media (max-width: 1080px) {
  .en-tete-page-ressource {
    height: revert;
  }

  .titre-en-tete-page-ressource {
    font-size: x-large;
  }

  .main-page-ressource {
    flex-direction: column;
    height: 100%;
  }

  .recherche-ressource-page-ressource {
    max-width: 100vw;
    height: 160px;
  }

  .liste-ressource-page-ressource {
    max-width: 100vw;
  }
}
</style>
