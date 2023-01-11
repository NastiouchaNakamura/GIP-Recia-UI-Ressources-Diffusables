<script setup lang="ts">
import { useI18n } from "vue-i18n";

interface Ressource {
  ressource: {
    id: string;
    nom: string;
  };
  editeur: {
    id: string;
    nom: string;
  };
  distributeursCom: Array<DistributeursCom>;
  distributeurTech: {
    id: string;
    nom: string;
  };
  affichable: boolean;
  diffusable: boolean;
}

interface DistributeursCom {
  id: string;
  nom: string;
}
defineProps<{
  ressources: Array<Ressource>;
  erreur: string;
  lectureTerminee: boolean;
  chargement: boolean | null;
}>();

const { t } = useI18n();

function m(key: string): string {
  return t(`liste-ressources.${key}`);
}
</script>

<template>
  <div class="cadre-liste-ressources">
    <main class="liste-liste-ressources">
      <div v-if="ressources.length !== 0">
        <carte-ressource-ce
          v-for="ressource in ressources"
          :key="ressource.ressource.id"
          :ressource="ressource"
        />
      </div>
    </main>
    <footer>
      <p v-if="chargement" class="chargement-liste-ressources">
        {{ m("chargement") }}
      </p>
      <p v-else-if="erreur !== ''">
        {{ m("erreur") }}<br />
        {{ m("detail-erreur") }}: <code>{{ erreur }}</code>
      </p>
      <p v-else-if="ressources.length === 0">
        {{ m("aucune-ressource") }}
      </p>
      <button
        v-else-if="!lectureTerminee"
        class="page-suivante-liste-ressources"
        @click="$emit('getPageSuivante')"
      >
        {{ m("charger-plus") }}
      </button>
    </footer>
  </div>
</template>

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
