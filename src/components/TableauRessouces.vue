<template>
  <div class="total">
    <recherche-ressource v-bind:recherche="recherche" ref="rechercheRessource" class="recherche-ressource"></recherche-ressource>
    <liste-ressources v-bind:recherche="recherche" ref="listeRessource" class="liste-ressource"></liste-ressources>
  </div>
</template>

<script>
import ListeRessources from "@/components/ListeRessources";
import RechercheRessource from "@/components/RechercheRessource";

export default {
  name: 'TableauRessouces',
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

.total {
  display: flex;
  margin: 0;
  padding: 0;
}

.recherche-ressource {
  max-width: 20vw;
  flex-grow: 0;
}

.liste-ressource {
  width: 100%;
  flex-grow: 0;
}
</style>
