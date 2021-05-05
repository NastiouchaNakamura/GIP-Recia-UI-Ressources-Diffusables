<template>
  <div class="cadre-legende-ressource">
    <ul class="liste-legendes-legende-ressource">
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">{{ $t('id-gar.intitule') }} : </span>
        <span class="definition-legende-ressource">{{ $t('id-gar.definition') }}</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">{{ $t('editeur.intitule') }} : </span>
        <span class="definition-legende-ressource">{{ $t('editeur.definition') }}</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">{{ $t('distributeurCom.intitule') }} : </span>
        <span class="definition-legende-ressource">{{ $t('distributeurCom.definition') }}</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">{{ $t('distributeurTech.intitule') }} : </span>
        <span class="definition-legende-ressource">{{ $t('distributeurTech.definition') }}</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">{{ $t('affichable.intitule') }} : </span>
        <span class="definition-legende-ressource">{{ $t('affichable.definition') }}</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">{{ $t('diffusable.intitule') }} : </span>
        <span class="definition-legende-ressource">{{ $t('diffusable.definition') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "legende-ressource"
}
</script>

<style scoped>
.cadre-legende-ressource {
  text-align: left;
  border: thin solid lightgrey;
  box-shadow: 2px 2px 5px lightgrey;
  box-sizing: border-box;
  padding: 10px;
}

.liste-legendes-legende-ressource {
  padding-left: 0;
}

.element-legende-ressource {
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
  padding: 0;
}

.intitule-legende-ressource {
  font-weight: bold;
}
</style>

<i18n>{
  "fr": {
    "id-gar": {
      "intitule": "Identifiant GAR",
      "definition": "Définition de l'Identifiant GAR."
    },
    "editeur": {
      "intitule": "Éditeur",
      "definition": "Définition de l'éditeur."
    },
    "distributeurCom": {
      "intitule": "Distributeur commercial",
      "definition": "Définition du distributeur commercial"
    },
    "distributeurTech": {
      "intitule": "Distributeur technique",
      "definition": "Définition du distributeur technique"
    },
    "affichable": {
      "intitule": "Affichable",
      "definition": "Définition de affichable"
    },
    "diffusable": {
      "intitule": "Diffusable",
      "definition": "Définition de diffusable"
    }
  },
  "en": {
    "id-gar": {
      "intitule": "GAR Identifier",
      "definition": "GAR Identifier meaning."
    },
    "editeur": {
      "intitule": "Editor",
      "definition": "Editor meaning."
    },
    "distributeurTech": {
      "intitule": "Technical distributor",
      "definition": "Technical distributor meaning"
    },
    "distributeurCom": {
      "intitule": "Commercial distributor",
      "definition": "Commercial distributor meaning"
    },
    "affichable": {
      "intitule": "Displayable",
      "definition": "Displayable meaning"
    },
    "diffusable": {
      "intitule": "Sharable",
      "definition": "Sharable meaning"
    }
  }
}</i18n>
