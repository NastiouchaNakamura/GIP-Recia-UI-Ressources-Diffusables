<template>
  <div class="cadre">
    <h3 class="nom-ressource">
      {{ ressource.ressource.nom }}
    </h3>
    <ul class="liste-attributs-ressource">
      <li class="attribut-ressource">
        <span class="intitule-attribut-ressource">Identifiant : </span>
        <span class="nom-attribut-ressource">{{ ressource.ressource.id }}</span>
      </li>
      <li class="attribut-ressource" v-if="ressource.editeur.nom !== '' || plusInfos">
        <span class="intitule-attribut-ressource">Éditeur : </span>
        <span class="nom-attribut-ressource">{{ ressource.editeur.nom }} </span>
        <span class="id-attribut-ressource" v-if="plusInfos">{{ ressource.editeur.id }}</span>
      </li>
      <li class="attribut-ressource" v-for="distributeurCom in distributeursComComputed" :key="distributeurCom.id">
        <span class="intitule-attribut-ressource">Distributeur commercial : </span>
        <span class="nom-attribut-ressource">{{ distributeurCom.nom }} </span>
        <span class="id-attribut-ressource" v-if="plusInfos">{{ distributeurCom.id }}</span>
      </li>
      <li class="attribut-ressource" v-if="ressource.distributeurTech.nom !== '' || plusInfos">
        <span class="intitule-attribut-ressource">Distributeur technique : </span>
        <span class="nom-attribut-ressource">{{ ressource.distributeurTech.nom }} </span>
        <span class="id-attribut-ressource" v-if="plusInfos">{{ ressource.distributeurTech.id }}</span>
      </li>
    </ul>
    <button v-on:click="afficherPlusInfos" :disabled="plusInfos">Plus d'informations</button>
  </div>
</template>

<script>
export default {
  name: "carte-ressource",
  props: {
    ressource: Object
  },
  data: function () {
    return {
      plusInfos: false,
      distributeursComComputed: []
    };
  },
  mounted() {
    this.ressource.distributeursCom.forEach(
        distributeurCom => {
          if (distributeurCom.nom !== '') {
            this.distributeursComComputed.push(distributeurCom);
          }
        }
    );
  },
  methods: {
    afficherPlusInfos() {
      this.plusInfos = true;
      this.distributeursComComputed = this.ressource.distributeursCom;
    }
  }
}
</script>

<style scoped>
.cadre {
  border: thin solid lightgrey;
  box-shadow: 2px 2px 5px lightgrey;
  border-radius: 10px;
  overflow: hidden;

  text-align: left;
  padding: 10px;
  margin: 5px;
}

.nom-ressource {
  margin-top: 0;
  margin-bottom: 12px;
  color: #d91a7e;
}

.attribut-ressource {
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
  padding: 0;
}

.intitule-attribut-ressource {
  font-weight: bold;
}

.id-attribut-ressource {
  color: grey;
  font-size: smaller;
}

.liste-attributs-ressource {
  padding-left: 0;
}
</style>
