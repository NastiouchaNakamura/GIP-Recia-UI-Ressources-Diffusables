<template>
  <div class="total">
    <fieldset class="formulaire">
      <legend>Recherche</legend>
      <form>
        <p>
          <label>
            ID de la ressource :
            <input v-model.trim="recherche.idRessource" @change="recommencerRecherche" type="text" placeholder="ID de la ressource">
          </label>
        </p>
        <p>
          <label>
            Nom de la ressource :
            <input v-model.trim="recherche.nomRessource" @change="recommencerRecherche" type="text" placeholder="Nom de la ressource">
          </label>
        </p>
        <p>
          <label>
            ID de l'éditeur :
            <input v-model.trim="recherche.idEditeur" @change="recommencerRecherche" type="text" placeholder="ID de l'éditeur">
          </label>
        </p>
        <p>
          <label>
            Distributeur Com :
            <input v-model.trim="recherche.distributeurCom" @change="recommencerRecherche" type="text" placeholder="Distributeur Com">
          </label>
        </p>
        <p>
          <label>
            Distributeur Tech :
            <input v-model.trim="recherche.distributeurTech" @change="recommencerRecherche" type="text" placeholder="Distributeur Tech">
          </label>
        </p>
        <p>
          <label>
            Affichable :
            <select v-model="recherche.affichable" @change="recommencerRecherche">
              <option value="">Indifférent</option>
              <option value="true">Affichable</option>
              <option value="false">Non affichable</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Diffusable :
            <select v-model="recherche.diffusable" @change="recommencerRecherche">
              <option value="">Indifférent</option>
              <option value="true">Diffusable</option>
              <option value="false">Non diffusable</option>
            </select>
          </label>
        </p>
        <p>
          <input type="reset" value="Réinitialiser la recherche" @click="reinitialiserRecherche">
        </p>
      </form>
    </fieldset>
    <liste-ressources v-bind:recherche="recherche" ref="listeRessources" class="liste-ressources"></liste-ressources>
  </div>
</template>

<script>
import ListeRessources from "@/components/ListeRessources";

export default {
  name: 'TableauRessouces',
  components: {listeRessources: ListeRessources},
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
  mounted() {
    this.recommencerRecherche();
  },
  methods: {
    reinitialiserRecherche: function () {
      for (let champ in this.recherche) {
        this.recherche[champ] = '';
      }
      this.recommencerRecherche();
    },
    recommencerRecherche: function () {
      this.$refs.listeRessources.recommencerRecherche();
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

.formulaire {
  max-width: 20vw;
  flex-grow: 0;
}

.liste-ressources {
  width: 100%;
  flex-grow: 0;
}
</style>
