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
}

.recherche-ressource-page-ressource {
  max-width: 20vw;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
}

.liste-ressource-page-ressource {
  max-width: 80vw;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
}

@media (max-width: 1080px) {
  .cadre-page-ressource {
    flex-direction: column;
  }

  .recherche-ressource-page-ressource {
    max-width: 100vw;
  }

  .liste-ressource-page-ressource {
    max-width: 100vw;
  }
}
</style>
