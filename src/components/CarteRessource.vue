<template>
  <div class="cadre-carte-ressource">
    <h3 class="nom-ressource-carte-ressource">
      {{ ressource.ressource.nom }}
    </h3>
    <ul class="liste-attributs-ressource-carte-ressource">
      <li class="attribut-ressource-carte-ressource">
        <span class="intitule-attribut-ressource-carte-ressource">{{ $t('id-gar') }} : </span>
        <span
            class="nom-attribut-ressource-carte-ressource id-principal-ressource-carte-ressource"
        >{{ ressource.ressource.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="ressource.editeur.nom !== '' || plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">{{ $t('editeur') }} : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.editeur.nom }} </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">{{ ressource.editeur.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-for="distributeurCom in distributeursComComputed" :key="distributeurCom.id">
        <span class="intitule-attribut-ressource-carte-ressource">{{ $t('distributeurCom') }} : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ distributeurCom.nom }} </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">{{ distributeurCom.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="ressource.distributeurTech.nom !== '' || plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">{{ $t('distributeurTech') }} : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.distributeurTech.nom }} </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">{{ ressource.distributeurTech.id }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">{{ $t('affichable') }} : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.affichable ? $t('oui') : $t('non') }}</span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">{{ $t('diffusable') }} : </span>
        <span class="nom-attribut-ressource-carte-ressource">{{ ressource.diffusable ? $t('oui') : $t('non') }}</span>
      </li>
    </ul>
    <div class="boutons-carte-ressource">
      <button class="" v-on:click="afficherPlusInfos" :disabled="plusInfos">{{ $t('plus-informations') }}</button>
      <button class="" v-on:click="copierReferences">{{ $t('copier-references') }}</button>
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
          this.$i18n.t('nom-ressource') + ': ' + this.ressource.ressource.nom + '\n' +
          this.$i18n.t('id-gar') + ': ' + this.ressource.ressource.id + '\n' +
          this.$i18n.t('editeur') + ': ' + this.ressource.editeur.nom + '\n';

      for (let i = 0; i < this.ressource.distributeursCom.length; i++) {
        string +=
            this.$i18n.t('distributeurCom') + ': ' + this.ressource.distributeursCom[i].nom + '\n';
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
  color: var(--main-color);
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

.id-principal-ressource-carte-ressource {
  word-wrap: break-word;
}

.id-attribut-ressource-carte-ressource {
  color: var(--default-text-color-transparent);
  font-size: smaller;
  word-wrap: break-word;
}

.liste-attributs-ressource-carte-ressource {
  padding-left: 0;
  margin-top: 10px;
  margin-bottom: 0;
}

.boutons-carte-ressource {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.boutons-carte-ressource > button {
  min-height: 30px;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 4px 0 4px;
  background-color: var(--secondary-color);
  color: var(--secondary-over-color);
  font-size: small;
  font-weight: bold;
  width: 30vw;
  min-width: calc(min(180px, 50%));
}

.boutons-carte-ressource > button:disabled {
  background-color: var(--secondary-color-transparent);
  color: var(--secondary-over-color-transparent);
}

@media (max-width: 1080px) {
  .cadre-carte-ressource {
    font-size: smaller;
  }
}
</style>

<i18n>{
  "fr": {
    "id-gar": "Identifiant GAR",
    "nom-ressource": "Nom de la ressource",
    "editeur": "Éditeur",
    "distributeurCom": "Distributeur commercial",
    "distributeurTech": "Distributeur technique",
    "affichable": "Affichable",
    "diffusable": "Diffusable",
    "oui": "Oui",
    "non": "Non",
    "plus-informations": "Plus d'informations",
    "copier-references": "Copier les références"
  },
  "en": {
    "id-gar": "GAR Identifier",
    "nom-ressource": "Resource name",
    "editeur": "Editor",
    "distributeurTech": "Technical distributor",
    "distributeurCom": "Commercial distributor",
    "affichable": "Displayable",
    "diffusable": "Sharable",
    "oui": "Yes",
    "non": "No",
    "plus-informations": "More informations",
    "copier-references": "Copy references"
  }
}</i18n>
