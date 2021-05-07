<template>
  <div class="cadre-liste-ressources">
    <main class="liste-liste-ressources">
      <div v-if="ressources.length !== 0">
        <carte-ressource
            v-for="ressource in ressources"
            :key="ressource.idRessource"
            v-bind:ressource="ressource"
        />
      </div>
    </main>
    <footer>
      <p
          v-if="chargement"
          class="chargement-liste-ressources"
      >
        {{ $t('chargement') }}
      </p>
      <p v-else-if="erreur !== ''">
        {{ $t('erreur') }}<br>
        {{ $t('detail-erreur') }}: <code>{{ erreur }}</code>
      </p>
      <p v-else-if="ressources.length === 0">
        {{ $t('aucune-ressource') }}
      </p>
      <button
          v-else-if="!lectureTerminee"
          class="page-suivante-liste-ressources"
          v-on:click="getPageSuivante"
      >
        {{ $t('charger-plus') }}
      </button>
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
  overflow-y: scroll;
}

.page-suivante-liste-ressources {
  width: calc(100% - 30px);
  height: 50px;
  border-radius: 3px;
  overflow: hidden;
  margin: 20px 10px 20px 10px;
  padding: 10px 15px 10px 15px;
  background-color: var(--secondary-color);
  color: var(--secondary-over-color);
  font-size: x-large;
  font-weight: bold;
  box-sizing: border-box;
  display: block;
}

.chargement-liste-ressources {
  width: calc(100% - 30px);
  font-size: x-large;
  font-weight: bold;
  height: 50px;
  margin: 20px 10px 20px 10px;
  padding: 12px 17px 12px 17px;
  box-sizing: border-box;
}
</style>

<i18n>{
  "fr": {
    "charger-plus": "Charger plus",
    "chargement": "Chargement…",
    "aucune-ressource": "Aucune ressource ne correspond à votre recherche.",
    "erreur": "Une erreur est survenue. Veuillez contacter un référent ENT.",
    "detail-erreur": "Détail de l'erreur "
  },
  "en": {
    "charger-plus": "Load more",
    "chargement": "Loading…",
    "aucune-ressource": "No resource matches your request.",
    "erreur": "An error occured. Please contact a ENT referent.",
    "detail-erreur": "Error informations"
  }
}</i18n>
