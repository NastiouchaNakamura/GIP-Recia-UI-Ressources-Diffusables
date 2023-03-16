<script setup lang="ts">
import type { Ressource } from "@/types/types";
import { useI18n } from "vue-i18n";

defineProps<{
  ressources: Array<Ressource>;
  erreur: string;
  lectureTerminee: boolean;
  chargement: boolean | null;
}>();

const { t } = useI18n();

const m = (key: string): string => t(`liste-ressources.${key}`);
</script>

<template>
  <div class="cadre-liste-ressources">
    <main>
      <carte-ressource-ce
        v-for="ressource in ressources"
        :key="ressource.ressource.id"
        :ressource="ressource"
      />
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

<style lang="scss" scoped>
.cadre-liste-ressources {
  height: calc(100vh - (20px + 77px));
  padding: 10px;
  overflow-y: scroll;
}

.cadre-liste-ressources > main {
  margin-bottom: -10px;
}

.cadre-liste-ressources > footer {
  text-align: center;
}

.page-suivante-liste-ressources {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: x-large;
  font-weight: bold;
  background-color: var(--ui-ressources-gar-button-background-color);
  color: var(--ui-ressources-gar-button-text-color);
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.chargement-liste-ressources {
  font-size: x-large;
  font-weight: bold;
}

@media (min-width: 1024px) {
  .cadre-liste-ressources {
    height: calc(100vh - 20px);
  }
}
</style>
