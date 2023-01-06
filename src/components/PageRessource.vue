<template>
  <div class="cadre-page-ressource">
    <div class="bloc-principal-page-ressource">
      <aside class="aside-page-ressource">
        <recherche-ressource
          :recherche="recherche"
          :nombreRessourcesTotal="nombreRessourcesTotal"
          :nombreRessourcesAffichees="ressources.length"
          @recommencerRechercheInput="recommencerRechercheInput"
          @reinitialiserRecherche="reinitialiserRecherche"
          ref="rechercheRessource"
          class="recherche-ressource-page-ressource"
        />
        <legende-ressource class="legende-ressource-page-ressource" />
      </aside>
      <main class="main-page-ressource">
        <liste-ressources
          :ressources="ressources"
          :erreur="erreur"
          :lectureTerminee="lectureTerminee"
          :chargement="chargement"
          @getPageSuivante="getPageSuivante"
          ref="listeRessource"
          class="liste-ressource-page-ressource"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  getRessourcesDiffusables,
  getSize,
} from "@/services/serviceRessourcesDiffusables.js";

import LegendeRessource from "@/components/LegendeRessource.vue";
import ListeRessources from "@/components/ListeRessources.vue";
import RechercheRessource from "@/components/RechercheRessource.vue";

const ressources = ref([]);
const erreur = ref("");
const nombreRessourcesTotal = ref(0);
const pageSuivante = ref(0);
const lectureTerminee = ref(false);
const chargement = ref(false);
const recherche = ref("");

onMounted(() => {
  recommencerRecherche();
});

function reinitialiserRecherche() {
  recherche.value = "";
  recommencerRecherche();
}

function recommencerRechercheInput(rechercheInput) {
  recherche.value = rechercheInput;
  recommencerRecherche();
}

async function recommencerRecherche() {
  ressources.value = [];
  pageSuivante.value = 0;
  erreur.value = "";
  chargement.value = true;
  try {
    let response = await getSize(recherche.value);
    nombreRessourcesTotal.value = response.data.payload;
    if (nombreRessourcesTotal.value === 0) {
      lectureTerminee.value = true;
      chargement.value = false;
    } else {
      lectureTerminee.value = false;
      getPageSuivante();
    }
  } catch (e) {
    erreur.value =
      e.toString() +
      (e.response != undefined ? " | " + e.response.data.message : "");
    chargement.value = false;
  }
}

async function getPageSuivante() {
  if (!lectureTerminee.value) {
    erreur.value = "";
    chargement.value = true;
    try {
      let response = await getRessourcesDiffusables(
        pageSuivante.value++,
        recherche.value
      );
      ressources.value = ressources.value.concat(response.data.payload);
      if (ressources.value.length === nombreRessourcesTotal.value) {
        lectureTerminee.value = true;
      }
      chargement.value = false;
    } catch (e) {
      erreur.value =
        e.toString() +
        (e.response != undefined ? " | " + e.response.data.message : "");
      chargement.value = false;
    }
  }
}
</script>

<style scoped>
.cadre-page-ressource {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.bloc-principal-page-ressource {
  display: flex;
  flex-direction: row;
}

.aside-page-ressource {
  max-width: 20%;
  width: 100%;
}

.liste-ressource-page-ressource {
  height: 100vh;
}

.main-page-ressource {
  width: 100%;
}

@media (max-width: 1080px) {
  .legende-ressource-page-ressource {
    display: none;
  }

  .bloc-principal-page-ressource {
    flex-direction: column;
    height: 100%;
  }

  .aside-page-ressource {
    max-width: 100vw;
  }

  .main-page-ressource {
    max-width: 100vw;
  }
}
</style>
