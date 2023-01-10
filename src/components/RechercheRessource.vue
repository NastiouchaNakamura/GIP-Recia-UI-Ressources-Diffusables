<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { debounce } from "debounce";

import "../icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const emit = defineEmits([
  "reinitialiserRecherche",
  "recommencerRechercheInput",
]);

defineProps<{
  recherche: string;
  nombreRessourcesTotal: number;
  nombreRessourcesAffichees: number;
}>();

const rechercheInput = ref<string>("");

const { t } = useI18n();

function m(key: string): string {
  return t(`recherche-ressource.${key}`);
}

function reinitialiserRecherche() {
  rechercheInput.value = "";
  emit("reinitialiserRecherche");
}

const recommencerRecherche = debounce(
  () => {
    emit("recommencerRechercheInput", rechercheInput.value);
  },
  500 // Buffer de 0,5s après input.
);
</script>

<template>
  <div class="cadre-recherche-ressource">
    <div class="input-recherche-ressource">
      <input
        class="champ-recherche-ressource"
        v-model.trim="rechercheInput"
        @input="recommencerRecherche"
        type="text"
        :placeholder="m('recherche')"
      />
      <button
        class="reinitialiser-recherche-ressource"
        @click="reinitialiserRecherche"
        :disabled="rechercheInput.length == 0"
      >
        <font-awesome-icon
          class="icone-reinitialiser-recherche-ressource sombre-off"
          :icon="['fa', 'xmark']"
        />
      </button>
    </div>
    <small class="elements-affiches-page-ressource">
      {{ nombreRessourcesAffichees }}/{{ nombreRessourcesTotal }}
      {{ m("elements-affiches").toUpperCase() }}
    </small>
  </div>
</template>

<style>
.cadre-recherche-ressource {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
}

.input-recherche-ressource {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.champ-recherche-ressource {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border-right: none;
  overflow: hidden;
  padding: 0 4px 0 4px;
  font-size: small;
  font-weight: bold;
  border-bottom: thin solid lightgrey;
  border-top: thin solid lightgrey;
  border-left: thin solid lightgrey;
  border-radius: 3px 0 0 3px;
}

.reinitialiser-recherche-ressource {
  width: 30px;
  height: 30px;
  overflow: hidden;
  padding: 0 4px 0 4px;
  background-color: var(--ui-ressources-gar-button-background-color);
  color: var(--ui-ressources-gar-button-text-color);
  font-size: small;
  font-weight: bold;
  border: none;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
}

.reinitialiser-recherche-ressource:disabled {
  background-color: dimgrey;
  opacity: 1;
  cursor: default;
}

.icone-reinitialiser-recherche-ressource {
  width: 80%;
}
</style>
