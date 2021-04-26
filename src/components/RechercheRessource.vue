<template>
  <div class="cadre-recherche-ressource">
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
  </div>
</template>

<script>
export default {
  name: "RechercheRessource",
  props: {
    recherche: Object
  },
  data: function() {
    return {};
  },
  methods: {
    reinitialiserRecherche: function () {
      for (let champ in this.recherche) {
        this.recherche[champ] = '';
      }
      this.recommencerRecherche();
    },
    recommencerRecherche: function () {
      this.$parent.recommencerRecherche();
    }
  }
}
</script>

<style scoped>

</style>
