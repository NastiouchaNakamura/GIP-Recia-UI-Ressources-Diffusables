<template>
  <div class="cadre-carte-ressource">
    <h3 class="nom-ressource-carte-ressource">
      {{ ressource.ressource.nom }}
    </h3>
    <ul class="liste-attributs-ressource-carte-ressource">
      <li class="attribut-ressource-carte-ressource">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ t("id-gar") }} :
        </span>
        <span
          class="nom-attribut-ressource-carte-ressource id-principal-ressource-carte-ressource"
        >
          {{ ressource.ressource.id }}
        </span>
      </li>
      <li
        class="attribut-ressource-carte-ressource"
        v-if="ressource.editeur.nom !== '' || plusInfos"
      >
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ t("editeur") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.editeur.nom }}
        </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">
          {{ ressource.editeur.id }}
        </span>
      </li>
      <li
        class="attribut-ressource-carte-ressource"
        v-for="distributeurCom in distributeursComComputed"
        :key="distributeurCom.id"
      >
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ t("distributeurCom") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ distributeurCom.nom }}
        </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">
          {{ distributeurCom.id }}
        </span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ t("distributeurTech") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.distributeurTech.nom }}
        </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos">
          {{ ressource.distributeurTech.id }}
        </span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ t("affichable") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.affichable ? t("oui") : t("non") }}
        </span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ t("diffusable") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.diffusable ? t("oui") : t("non") }}
        </span>
      </li>
    </ul>
    <div class="boutons-carte-ressource">
      <button class="" v-on:click="afficherPlusInfos">
        {{ plusInfos ? t("moins-informations") : t("plus-informations") }}
      </button>
      <button class="" v-on:click="copierReferences">
        {{ t("copier-references") }}
      </button>
    </div>
  </div>
</template>

<script>
import i18n from "@/i18n";

export default {
  name: "carte-ressource",
  props: {
    ressource: Object,
  },
  data: function () {
    return {
      plusInfos: false,
      distributeursComComputed: [],
    };
  },
  mounted() {
    this.ressource.distributeursCom.forEach((distributeurCom) => {
      if (distributeurCom.nom !== "") {
        this.distributeursComComputed.push(distributeurCom);
      }
    });
  },
  methods: {
    t: function (key) {
      return i18n.t(`message.${this.$options.name}.${key}`); // 'message.page-ressource.{key}
    },
    afficherPlusInfos() {
      this.plusInfos = !this.plusInfos;
    },
    copierReferences() {
      let string = `${this.t("nom-ressource")}: ${this.ressource.ressource.nom}
${this.t("id-gar")}: ${this.ressource.ressource.id}
${this.t("editeur")}: ${this.ressource.editeur.nom}`;

      for (const element of this.ressource.distributeursCom) {
        string += `\n${this.t("distributeurCom")}: ${element.nom}`;
      }

      navigator.clipboard.writeText(string);
    },
  },
};
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
  color: var(--ui-ressources-gar-header-background-color);
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
  opacity: 0.5;
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
  background-color: var(--ui-ressources-gar-button-background-color);
  color: var(--ui-ressources-gar-button-text-color);
  font-size: small;
  font-weight: bold;
  width: 30vw;
  min-width: calc(min(180px, 50%));
  max-width: 500px;
}

.boutons-carte-ressource > button:disabled {
  opacity: 0.5;
}

@media (max-width: 1080px) {
  .cadre-carte-ressource {
    font-size: smaller;
  }
}
</style>
