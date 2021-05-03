<template>
  <div class="cadre-carte-ressource">
    <h3 class="nom-ressource-carte-ressource">
      {{ ressource.ressource.nom }}
    </h3>
    <ul class="liste-attributs-ressource-carte-ressource">
      <li class="attribut-ressource-carte-ressource">
        <span class="intitule-attribut-ressource-carte-ressource">Identifiant GAR : </span>
        <span class="nom-attribut-ressource">{{ ressource.ressource.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="ressource.editeur.nom !== '' || plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">Éditeur : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.editeur.nom }} </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">{{ ressource.editeur.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-for="distributeurCom in distributeursComComputed" :key="distributeurCom.id">
        <span class="intitule-attribut-ressource-carte-ressource">Distributeur commercial : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ distributeurCom.nom }} </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">{{ distributeurCom.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="ressource.distributeurTech.nom !== '' || plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">Distributeur technique : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.distributeurTech.nom }} </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">{{ ressource.distributeurTech.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">Affichable : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.affichable ? 'Oui' : 'Non' }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">Diffusable : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.diffusable ? 'Oui' : 'Non' }}</span>
      </li>
    </ul>
    <div class="boutons-carte-ressource">
      <button class="" v-on:click="afficherPlusInfos" :disabled="plusInfos">Plus d'informations</button>
      <button class="" v-on:click="copierReferences">Copier les références</button>
    </div>
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
    },
    copierReferences() {
      let string =
          'Nom de la ressource : ' + this.ressource.ressource.nom + '\n' +
          'Identifiant GAR : ' + this.ressource.ressource.id + '\n' +
          'Nom de l\'éditeur : ' + this.ressource.editeur.nom + '\n';

      for (let i = 0; i < this.ressource.distributeursCom.length; i++) {
        string +=
            'Nom du distributeur commercial : ' + this.ressource.distributeursCom[i].nom + '\n';
      }

      navigator.clipboard.writeText(string);
    }
  }
}
</script>

<style scoped>
.cadre-carte-ressource {
  border: thin solid lightgrey;
  box-shadow: 2px 2px 5px lightgrey;
  border-radius: 10px;
  overflow: hidden;

  text-align: left;
  padding: 10px;
  margin: 5px;
}

.nom-ressource-carte-ressource {
  margin-top: 0;
  margin-bottom: 12px;
  color: #d91a7e;
}

.attribut-ressource-carte-ressource {
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
  padding: 0;
}

.intitule-attribut-ressource-carte-ressource {
  font-weight: bold;
}

.id-attribut-ressource-carte-ressource {
  color: grey;
  font-size: smaller;
}

.liste-attributs-ressource-carte-ressource {
  padding-left: 0;
  margin-top: 10px;
  margin-bottom: 0;
}

.boutons-carte-ressource {
  display: flex;
  flex-direction: row;
}

.boutons-carte-ressource > button {
  width: 100%;
  height: 30px;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 4px 0 4px;
  background-color: #303364;
  color: white;
  font-size: small;
  font-weight: bold;
}

.boutons-carte-ressource > button:disabled {
  background-color: #30336480;
  color: #FFFFFF80;
}

@media (max-width: 1080px) {
  .cadre-carte-ressource {
    font-size: smaller;
  }
}
</style>
