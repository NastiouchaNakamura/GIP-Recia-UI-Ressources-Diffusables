<template>
  <div class="cadre-legende-ressource">
    <ul class="liste-legendes-legende-ressource">
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">Identifiant GAR : </span>
        <span class="definition-legende-ressource">Définition de l'Identifiant GAR</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">Éditeur : </span>
        <span class="definition-legende-ressource">Définition de l'éditeur</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">Distributeur commercial : </span>
        <span class="definition-legende-ressource">Définition du distributeur commercial</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">Distributeur technique : </span>
        <span class="definition-legende-ressource">Définition du distributeur technique</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">Affichable : </span>
        <span class="definition-legende-ressource">Définition de affchable</span>
      </li>
      <li class="element-legende-ressource">
        <span class="intitule-legende-ressource">Diffusable : </span>
        <span class="definition-legende-ressource">Définition de diffusable</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "legende-ressource"
}
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
