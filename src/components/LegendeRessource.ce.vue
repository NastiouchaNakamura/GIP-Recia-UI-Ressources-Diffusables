<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const m = (key: string): string => t(`legende-ressource.${key}`);
</script>

<template>
  <div class="cadre-legende-ressource">
    <ul class="liste-legendes-legende-ressource">
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ m("id-gar.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ m("id-gar.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ m("editeur.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ m("editeur.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ m("distributeurCom.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ m("distributeurCom.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ m("distributeurTech.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ m("distributeurTech.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ m("affichable.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ m("affichable.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ m("diffusable.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ m("diffusable.definition") }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cadre-legende-ressource {
  text-align: left;
  padding: var(--ui-ressources-gar-padding);
  margin: 10px;
  background-color: #fff;
  border-radius: 12px;
}

.liste-legendes-legende-ressource {
  padding: 0px;
  margin: 0;
}

.element-legende-ressource {
  list-style-type: none;
}

.element-legende-ressource:not(:last-child) {
  margin-bottom: 10px;
}

.intitule-legende-ressource {
  font-weight: bold;
}
</style>
