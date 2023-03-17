<script setup lang="ts">
import type { DistributeursCom, Ressource } from "@/types/types";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";

const props = defineProps<{
  ressource: Ressource;
}>();

const plusInfos = ref<boolean>(false);
const distributeursComComputed = ref<Array<DistributeursCom>>([]);

onMounted(() => {
  distributeursComComputed.value = props.ressource.distributeursCom.filter(
    (distributeurCom: DistributeursCom) => distributeurCom.nom !== ""
  );
});

const { t } = useI18n();
const toast = useToast();

const m = (key: string): string => t(`carte-ressource.${key}`);

const afficherPlusInfos = (): void => {
  plusInfos.value = !plusInfos.value;
};

const copierReferences = (): void => {
  let string = `${m("nom-ressource")}: ${props.ressource.ressource.nom}
${m("id-gar")}: ${props.ressource.ressource.id}
${m("editeur")}: ${props.ressource.editeur.nom}`;

  props.ressource.distributeursCom.forEach((element) => {
    string += `\n${m("distributeurCom")}: ${element.nom}`;
  });

  navigator.clipboard.writeText(string);
  toast.info(m("contenu-copie"));
};
</script>

<template>
  <div class="cadre-carte-ressource">
    <h3 class="nom-ressource-carte-ressource">
      {{ ressource.ressource.nom }}
    </h3>
    <ul class="liste-attributs-ressource-carte-ressource">
      <li class="attribut-ressource-carte-ressource">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ m("id-gar") }} :
        </span>
        <span class="id-principal-ressource-carte-ressource">
          {{ ressource.ressource.id }}
        </span>
      </li>
      <li
        class="attribut-ressource-carte-ressource"
        v-if="ressource.editeur.nom !== '' || plusInfos"
      >
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ m("editeur") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.editeur.nom }}
        </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos"
          >&nbsp;{{ ressource.editeur.id }}
        </span>
      </li>
      <li
        class="attribut-ressource-carte-ressource"
        v-for="distributeurCom in distributeursComComputed"
        :key="distributeurCom.id"
      >
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ m("distributeurCom") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ distributeurCom.nom }}
        </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos"
          >&nbsp;{{ distributeurCom.id }}
        </span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ m("distributeurTech") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.distributeurTech.nom }}
        </span>
        <span class="id-attribut-ressource-carte-ressource" v-if="plusInfos"
          >&nbsp;{{ ressource.distributeurTech.id }}
        </span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ m("affichable") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.affichable ? m("oui") : m("non") }}
        </span>
      </li>
      <li class="attribut-ressource-carte-ressource" v-if="plusInfos">
        <span class="intitule-attribut-ressource-carte-ressource">
          {{ m("diffusable") }} :
        </span>
        <span class="nom-attribut-ressource-carte-ressource">
          {{ ressource.diffusable ? m("oui") : m("non") }}
        </span>
      </li>
    </ul>
    <div class="boutons-carte-ressource">
      <button class="" @click="afficherPlusInfos">
        {{ plusInfos ? m("moins-informations") : m("plus-informations") }}
      </button>
      <button class="" @click="copierReferences">
        {{ m("copier-references") }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$margin: 10px;

.cadre-carte-ressource {
  text-align: left;
  background-color: #fff;
  padding: var(--ui-ressources-gar-padding);
  margin-bottom: $margin;
  border-radius: var(--ui-ressources-gar-card-border-radius);
}

.nom-ressource-carte-ressource {
  margin-top: 0;
  margin-bottom: $margin;
  color: var(--ui-ressources-gar-header-background-color);
}

.liste-attributs-ressource-carte-ressource {
  list-style-type: none;
  padding: 0;
  margin: 0 0 $margin 0;
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

.boutons-carte-ressource {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.boutons-carte-ressource > button {
  min-width: min(200px, 45%);
  padding: 10px;
  font-size: small;
  font-weight: bold;
  background-color: var(--ui-ressources-gar-button-background-color);
  color: var(--ui-ressources-gar-button-text-color);
  border: none;
  border-radius: var(--ui-ressources-gar-button-border-radius);
  cursor: pointer;
}

.boutons-carte-ressource > button:not(:first-child) {
  margin-left: calc($margin/2);
}
.boutons-carte-ressource > button:not(:last-child) {
  margin-right: calc($margin/2);
}

.boutons-carte-ressource > button:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .boutons-carte-ressource {
    justify-content: flex-end;
  }
}
</style>
