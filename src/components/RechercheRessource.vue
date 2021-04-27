<template>
  <div class="cadre-recherche-ressource">
    <header class="en-tete-recherche-ressource">
      <h1 class="titre-en-tete-recherche-ressource">Recherche</h1>
    </header>
    <main class="formulaire-recherche-ressource">
      <input class="champ-recherche-ressource" v-model.trim="recherche.texte" @change="recommencerRecherche" type="text" placeholder="Recherche">
      <button class="reinitialiser-recherche-ressource" @click="reinitialiserRecherche">Réinitialiser la recherche</button>
    </main>
  </div>
</template>

<script>
export default {
  name: "recherche-ressource",
  props: {
    recherche: Object
  },
  data: function() {
    return {};
  },
  methods: {
    reinitialiserRecherche: function () {
      this.recherche.texte = '';
      this.recommencerRecherche();
    },
    recommencerRecherche: function () {
      this.$parent.recommencerRecherche();
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
}

.en-tete-recherche-ressource {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #d91a7b;
  padding: 10px 20px 10px 20px;
  border-bottom: thin solid lightgrey;
  box-shadow: 0 2px 5px lightgrey;
}

.titre-en-tete-recherche-ressource {
  margin-top: 0;
  margin-bottom: 0;
  color: white;
}

.formulaire-recherche-ressource {
  padding: 10px;
}

.champ-recherche-ressource {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 5px;
  border: thin solid lightgrey;
  padding: 0 4px 0 4px;
  font-size: small;
  font-weight: bold;
}

.reinitialiser-recherche-ressource {
  width: 100%;
  height: 30px;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 5px;
  padding: 0 4px 0 4px;
  background-color: #303364;
  color: white;
  font-size: small;
  font-weight: bold;
}
</style>
