<template>
  <div class="cadre-liste-ressource">
    <main class="liste-liste-ressource">
      <div v-if="ressources.length !== 0">
        <carte-ressource
            v-for="ressource in ressources"
            :key="ressource.idRessource"
            v-bind:ressource="ressource"
        />
        <div class="div-page-suivante-liste-ressource" v-if="!lectureTerminee">
          <button class="page-suivante-liste-ressource" v-on:click="getPageSuivante">Charger plus</button>
        </div>
      </div>
    </main>
    <footer>
      <div v-if="ressources.length === 0 && !chargement">
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
import CarteRessource from "@/components/CarteRessource";

export default {
  name: "liste-ressources",
  components: {CarteRessource},
  props: {
    ressources: Array,
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
.cadre-liste-ressource {
  display: flex;
  flex-direction: column;
  border: thin solid lightgrey;
  box-shadow: 2px 2px 5px lightgrey;
  box-sizing: border-box;
  padding: 10px;
}

.liste-liste-ressource {
  overflow: scroll;
}

.page-suivante-liste-ressource {
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

.div-page-suivante-liste-ressource {
  padding: 10px;
  margin: 5px;
}
</style>
