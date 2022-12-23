<template>
  <div class="cadre-liste-ressources">
    <main class="liste-liste-ressources">
      <div v-if="ressources.length !== 0">
        <carte-ressource
          v-for="ressource in ressources"
          :key="ressource.idRessource"
          v-bind:ressource="ressource"
        />
      </div>
    </main>
    <footer>
      <p v-if="chargement" class="chargement-liste-ressources">
        {{ t("chargement") }}
      </p>
      <p v-else-if="erreur !== ''">
        {{ t("erreur") }}<br />
        {{ t("detail-erreur") }}: <code>{{ erreur }}</code>
      </p>
      <p v-else-if="ressources.length === 0">
        {{ t("aucune-ressource") }}
      </p>
      <button
        v-else-if="!lectureTerminee"
        class="page-suivante-liste-ressources"
        v-on:click="getPageSuivante"
      >
        {{ t("charger-plus") }}
      </button>
    </footer>
  </div>
</template>

<script>
import CarteRessource from "@/components/CarteRessource.vue";
import i18n from "@/i18n";

export default {
  name: "liste-ressources",
  components: { CarteRessource },
  props: {
    ressources: Array,
    erreur: String,
    lectureTerminee: Boolean,
    chargement: Boolean,
  },
  data: function () {
    return {};
  },
  methods: {
    t: function (key) {
      return i18n.t(`message.${this.$options.name}.${key}`); // 'message.page-ressource.{key}
    },
    getPageSuivante: function () {
      this.$parent.getPageSuivante();
    },
  },
};
</script>

<style scoped>
.cadre-liste-ressources {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 10px;
}

.page-suivante-liste-ressources {
  width: calc(100% - 20px);
  height: 50px;
  border-radius: 2em;
  border: none;
  overflow: hidden;
  margin: 15px 10px 15px 10px;
  padding: 10px 15px 10px 15px;
  background-color: var(--ui-ressources-gar-button-background-color);
  color: var(--ui-ressources-gar-button-text-color);
  font-size: x-large;
  font-weight: bold;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
}

.chargement-liste-ressources {
  width: calc(100% - 30px);
  font-size: x-large;
  font-weight: bold;
  height: 50px;
  margin: 20px 10px 20px 10px;
  padding: 12px 17px 12px 17px;
  box-sizing: border-box;
}
</style>
