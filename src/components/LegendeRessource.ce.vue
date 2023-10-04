<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="cadre-legende-ressource">
    <ul class="liste-legendes-legende-ressource">
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource"> {{ t('legende-ressource.id-gar.intitule') }} : </span>
        <span class="definition-legende-ressource">
          {{ t('legende-ressource.id-gar.definition') }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource"> {{ t('legende-ressource.editeur.intitule') }} : </span>
        <span class="definition-legende-ressource">
          {{ t('legende-ressource.editeur.definition') }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource"> {{ t('legende-ressource.distributeurCom.intitule') }} : </span>
        <span class="definition-legende-ressource">
          {{ t('legende-ressource.distributeurCom.definition') }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource"> {{ t('legende-ressource.distributeurTech.intitule') }} : </span>
        <span class="definition-legende-ressource">
          {{ t('legende-ressource.distributeurTech.definition') }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource"> {{ t('legende-ressource.affichable.intitule') }} : </span>
        <span class="definition-legende-ressource">
          {{ t('legende-ressource.affichable.definition') }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource"> {{ t('legende-ressource.diffusable.intitule') }} : </span>
        <span class="definition-legende-ressource">
          {{ t('legende-ressource.diffusable.definition') }}
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
  border-radius: var(--ui-ressources-gar-card-border-radius);
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
