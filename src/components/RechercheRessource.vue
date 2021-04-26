<template>
  <div class="cadre-recherche-ressource">
    <header class="en-tete-recherche-ressource">
      <h1 class="titre-en-tete-recherche-ressource">Recherche</h1>
    </header>
    <main class="formulaire-recherche-ressource">
      <ul class="liste-champs-recherche-ressource">
        <li class="champ-recherche-ressource">
          <input v-model.trim="recherche.texte" @change="recommencerRecherche" type="text" placeholder="Recherche">
        </li>
        <li class="champ-recherche-ressource">
          <button @click="reinitialiserRecherche">Réinitialiser la recherche</button>
        </li>
      </ul>
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

.liste-champs-recherche-ressource {
  padding-left: 0;
}

.champ-recherche-ressource {
  list-style-type: none;
}
</style>
