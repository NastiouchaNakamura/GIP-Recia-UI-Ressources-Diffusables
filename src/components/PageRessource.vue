<template>
  <div class="cadre-page-ressource">
    <header class="en-tete-page-ressource">
      <h1 class="titre-en-tete-page-ressource">{{ $t('ressources-diffusables') }}</h1>
    </header>
    <div class="bloc-principal-page-ressource">
      <aside class="aside-page-ressource">
        <recherche-ressource
            v-bind:recherche="recherche"
            v-bind:nombreRessourcesTotal="nombreRessourcesTotal"
            v-bind:nombreRessourcesAffichees="ressources.length"
            ref="rechercheRessource"
            class="recherche-ressource-page-ressource"
        />
        <legende-ressource
            class="legende-ressource-page-ressource"
        />
      </aside>
      <main class="main-page-ressource">
        <liste-ressources
            v-bind:ressources="ressources"
            v-bind:erreur="erreur"
            v-bind:lectureTerminee="lectureTerminee"
            v-bind:chargement="chargement"
            ref="listeRessource"
            class="liste-ressource-page-ressource"
        />
      </main>
    </div>
  </div>
</template>

<script>
import ListeRessources from "@/components/ListeRessources";
import RechercheRessource from "@/components/RechercheRessource";
import {getRessourcesDiffusables, getSize} from "@/services/serviceRessourcesDiffusables";
import LegendeRessource from "@/components/LegendeRessource";

export default {
  name: 'page-ressource',
  components: {
    LegendeRessource,
    rechercheRessource: RechercheRessource,
    listeRessources: ListeRessources
  },
  data: function() {
    return {
      ressources: [],
      erreur: '',
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
      ).catch(
          error => {
            this.erreur = error.toString();
            this.chargement = false;
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
        ).catch(
            error => {
              this.erreur = error.toString();
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
  background-color: var(--main-color);
  padding: 10px 20px 10px 20px;
  border-bottom: thin solid lightgrey;
  box-shadow: 0 2px 5px lightgrey;
}

.titre-en-tete-page-ressource {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--main-over-color);
}

.bloc-principal-page-ressource {
  display: flex;
  flex-direction: row;
  height: calc(100% - 70px);
}

.aside-page-ressource {
  max-width: 20vw;
  width: 100%;
}

.main-page-ressource {
  max-width: 80vw;
  width: 100%;
}

@media (max-width: 1080px) {
  .legende-ressource-page-ressource {
    display: none;
  }

  .en-tete-page-ressource {
    height: revert;
  }

  .titre-en-tete-page-ressource {
    font-size: x-large;
  }

  .bloc-principal-page-ressource {
    flex-direction: column;
    height: 100%;
  }

  .aside-page-ressource {
    max-width: 100vw;
    height: 160px;
  }

  .main-page-ressource {
    max-width: 100vw;
  }
}
</style>

<i18n>{
  "fr": {
    "ressources-diffusables": "Ressources diffusables"
  },
  "en": {
    "ressources-diffusables": "Sharable resources"
  }
}</i18n>
