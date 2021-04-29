<template>
  <div class="cadre-page-ressource">
    <recherche-ressource v-bind:recherche="recherche" ref="rechercheRessource" class="recherche-ressource-page-ressource"/>
    <liste-ressources v-bind:recherche="recherche" ref="listeRessource" class="liste-ressource-page-ressource"/>
  </div>
</template>

<script>
import ListeRessources from "@/components/ListeRessources";
import RechercheRessource from "@/components/RechercheRessource";

export default {
  name: 'page-ressource',
  components: {
    rechercheRessource: RechercheRessource,
    listeRessources: ListeRessources
  },
  data: function() {
    return {
      recherche: {
        texte: ''
      }
    };
  },
  methods: {
    recommencerRecherche: function () {
      this.$refs.listeRessource.recommencerRecherche();
    }
  }
}
</script>

<style scoped>

.cadre-page-ressource {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: calc(100vh - 180px);
  max-height: calc(100vh - 180px);
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
  .cadre-page-ressource {
    flex-direction: column;
  }

  .recherche-ressource-page-ressource {
    max-width: 100vw;
    height: 160px;
  }

  .liste-ressource-page-ressource {
    max-width: 100vw;
    height: calc(100% - 160px);
  }
}
</style>
