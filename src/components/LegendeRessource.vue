<template>
  <div class="cadre-legende-ressource">
    <ul class="liste-legendes-legende-ressource">
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ t("id-gar.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ t("id-gar.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ t("editeur.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ t("editeur.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ t("distributeurCom.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ t("distributeurCom.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ t("distributeurTech.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ t("distributeurTech.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ t("affichable.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ t("affichable.definition") }}
        </span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">
          {{ t("diffusable.intitule") }} :
        </span>
        <span class="definition-legende-ressource">
          {{ t("diffusable.definition") }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import i18n from "@/i18n";

export default {
  name: "legende-ressource",
  methods: {
    t: function (key) {
      return i18n.t(`message.${this.$options.name}.${key}`); // 'message.page-ressource.{key}
    },
  },
};
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
