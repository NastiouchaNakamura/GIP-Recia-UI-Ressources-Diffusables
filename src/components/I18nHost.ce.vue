<script setup lang="ts">
import { provide } from "vue";
import { I18nInjectionKey } from "vue-i18n";
import i18n from "../i18n";

provide(I18nInjectionKey, i18n);
</script>

<template>
  <page-ressource-ce />
</template>
