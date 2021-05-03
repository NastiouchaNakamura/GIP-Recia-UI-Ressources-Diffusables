<template>
  <div class="cadre-recherche-ressource">
    <div class="input-recherche-ressource">
      <input class="champ-recherche-ressource" v-model.trim="rechercheInput" @change="recommencerRecherche" type="text" placeholder="Recherche">
      <button class="reinitialiser-recherche-ressource" @click="reinitialiserRecherche">
        <font-awesome-icon :icon="['fas', 'redo']"/>
      </button>
    </div>
    <small class="elements-affiches-page-ressource">
      {{ nombreRessourcesAffichees }}/{{ nombreRessourcesTotal }} ÉLÉMENTS AFFICHÉS
    </small>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

library.add(faRedo)

export default {
  name: "recherche-ressource",
  props: {
    recherche: String,
    nombreRessourcesTotal: Number,
    nombreRessourcesAffichees: Number
  },
  data: function() {
    return {
      rechercheInput: ''
    };
  },
  methods: {
    reinitialiserRecherche: function () {
      this.rechercheInput = '';
      this.$parent.recommencerRechercheInput(this.rechercheInput);
    },
    recommencerRecherche: function () {
      this.$parent.recommencerRechercheInput(this.rechercheInput);
    }
  }
}
</script>

<style scoped>
.cadre-recherche-ressource {
  display: flex;
  flex-direction: column;
  border: thin solid lightgrey;
  box-shadow: 2px 2px 5px lightgrey;
  box-sizing: border-box;
  padding: 10px;
}

.input-recherche-ressource {
  display: flex;
  flex-direction: row;
}

.champ-recherche-ressource {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  overflow: hidden;
  border: thin solid lightgrey;
  padding: 0 4px 0 4px;
  font-size: small;
  font-weight: bold;
  margin-right: 5px;
}

.reinitialiser-recherche-ressource {
  width: 50px;
  height: 30px;
  border-radius: 3px;
  overflow: hidden;
  padding: 0 4px 0 4px;
  background-color: #303364;
  color: white;
  font-size: small;
  font-weight: bold;
  margin-left: 5px;
}
</style>
