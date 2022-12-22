<template>
  <div class="cadre-page-ressource">
    <header class="en-tete-page-ressource">
      <h1 class="titre-en-tete-page-ressource">
        {{ t("ressources-diffusables") }}
      </h1>
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
        <legende-ressource class="legende-ressource-page-ressource" />
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
import ListeRessources from "@/components/ListeRessources.vue";
import RechercheRessource from "@/components/RechercheRessource.vue";
import {
  getRessourcesDiffusables,
  getSize,
} from "@/services/serviceRessourcesDiffusables.js";
import LegendeRessource from "@/components/LegendeRessource.vue";
import i18n from "@/i18n";

export default {
  name: "page-ressource",
  components: {
    LegendeRessource,
    RechercheRessource,
    ListeRessources,
  },
  data: function () {
    return {
      ressources: [],
      erreur: "",
      nombreRessourcesTotal: 0,
      pageSuivante: 0,
      lectureTerminee: false,
      chargement: false,
      recherche: "",
    };
  },
  mounted() {
    this.recommencerRecherche();
  },
  methods: {
    t: function (key) {
      return i18n.t(`message.${this.$options.name}.${key}`); // 'message.page-ressource.{key}
    },
    reinitialiserRecherche: function () {
      this.recherche = "";
      this.recommencerRecherche();
    },
    recommencerRechercheInput: function (rechercheInput) {
      this.recherche = rechercheInput;
      this.recommencerRecherche();
    },
    recommencerRecherche: async function () {
      this.ressources = [];
      this.pageSuivante = 0;
      this.erreur = "";
      this.chargement = true;
      try {
        let response = await getSize(this.recherche);
        this.nombreRessourcesTotal = response.data.payload;
        if (this.nombreRessourcesTotal === 0) {
          this.lectureTerminee = true;
          this.chargement = false;
        } else {
          this.lectureTerminee = false;
          this.getPageSuivante();
        }
      } catch (e) {
        this.erreur =
          e.toString() +
          (e.response != undefined ? " | " + e.response.data.message : "");
        this.chargement = false;
      }
    },
    getPageSuivante: async function () {
      if (!this.lectureTerminee) {
        this.erreur = "";
        this.chargement = true;
        try {
          let response = await getRessourcesDiffusables(
            this.pageSuivante++,
            this.recherche
          );
          this.ressources = this.ressources.concat(response.data.payload);
          if (this.ressources.length === this.nombreRessourcesTotal) {
            this.lectureTerminee = true;
          }
          this.chargement = false;
        } catch (e) {
          this.erreur =
            e.toString() +
            (e.response != undefined ? " | " + e.response.data.message : "");
          this.chargement = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.cadre-page-ressource {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.en-tete-page-ressource {
  background-color: var(--ui-ressources-gar-header-background-color);
  padding: 10px 20px 10px 20px;
  border-bottom: thin solid lightgrey;
  box-shadow: 0 2px 5px lightgrey;
}

.titre-en-tete-page-ressource {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--ui-ressources-gar-header-text-color);
}

.bloc-principal-page-ressource {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 240px);
}

.aside-page-ressource {
  max-width: 20%;
  width: 100%;
}

.main-page-ressource {
  max-width: 80%;
  width: 100%;
  height: 100%;
}

.liste-ressource-page-ressource {
  height: 100%;
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
  }

  .main-page-ressource {
    max-width: 100vw;
  }
}
</style>
