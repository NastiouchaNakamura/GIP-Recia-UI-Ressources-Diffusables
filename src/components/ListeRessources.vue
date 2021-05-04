<template>
  <div class="cadre-liste-ressources">
    <main class="liste-liste-ressources">
      <div v-if="ressources.length !== 0">
        <carte-ressource
            v-for="ressource in ressources"
            :key="ressource.idRessource"
            v-bind:ressource="ressource"
        />
        <div class="div-page-suivante-liste-ressources" v-if="!lectureTerminee">
          <button class="page-suivante-liste-ressources" v-on:click="getPageSuivante">Charger plus</button>
        </div>
      </div>
    </main>
    <footer>
      <p v-if="erreur !== ''">
        Une erreur est survenue. Veuillez contacter un référent ENT.<br>
        Détail de l'erreur : <code>{{ erreur }}</code>
      </p>
      <p v-else-if="ressources.length === 0 && !chargement">
        Aucune ressource ne correspond à votre recherche.
      </p>
      <p v-if="chargement">
        Chargement…
      </p>
    </footer>
  </div>
</template>

<script>
import CarteRessource from "@/components/CarteRessource";

export default {
  name: "liste-ressourcess",
  components: {CarteRessource},
  props: {
    ressources: Array,
    erreur: String,
    lectureTerminee: Boolean,
    chargement: Boolean
  },
  data: function() {
    return {};
  },
  methods: {
    getPageSuivante: function () {
      this.$parent.getPageSuivante();
    }
  }
}
</script>

<style scoped>
.cadre-liste-ressources {
  display: flex;
  flex-direction: column;
  border: thin solid lightgrey;
  box-shadow: 2px 2px 5px lightgrey;
  box-sizing: border-box;
  padding: 10px;
}

.liste-liste-ressources {
  overflow: scroll;
}

.page-suivante-liste-ressources {
  width: 100%;
  height: 50px;
  border-radius: 3px;
  overflow: hidden;
  margin: 5px;
  padding: 0 4px 0 4px;
  background-color: #303364;
  color: white;
  font-size: x-large;
  font-weight: bold;
}

.div-page-suivante-liste-ressources {
  padding: 10px;
  margin: 5px;
}
</style>
