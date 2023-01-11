<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  getRessourcesDiffusables,
  getSize,
} from "../services/serviceRessourcesDiffusables";

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

interface Event {
  detail: Array<any>;
}

const ressources = ref<Array<Ressource>>([]);
const erreur = ref<string>("");
const nombreRessourcesTotal = ref<number>(0);
const pageSuivante = ref<number>(0);
const lectureTerminee = ref<boolean>(false);
const chargement = ref<boolean>(false);
const recherche = ref<string>("");

onMounted(() => {
  recommencerRecherche();
});

function reinitialiserRecherche() {
  recherche.value = "";
  recommencerRecherche();
}

function recommencerRechercheInput(rechercheInput: Event): void {
  recherche.value = rechercheInput.detail[0];
  recommencerRecherche();
}

async function recommencerRecherche(): Promise<void> {
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
  } catch (e: any) {
    erreur.value =
      e.toString() +
      (e.response != undefined ? " | " + e.response.data.message : "");
    chargement.value = false;
  }
}

async function getPageSuivante(): Promise<void> {
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
    } catch (e: any) {
      erreur.value =
        e.toString() +
        (e.response != undefined ? " | " + e.response.data.message : "");
    }
    chargement.value = false;
  }
}
</script>

<template>
  <div class="cadre-page-ressource">
    <div class="bloc-principal-page-ressource">
      <aside class="aside-page-ressource">
        <recherche-ressource-ce
          :nombreRessourcesTotal="nombreRessourcesTotal"
          :nombreRessourcesAffichees="ressources.length"
          @recommencerRechercheInput="recommencerRechercheInput"
          @reinitialiserRecherche="reinitialiserRecherche"
          ref="rechercheRessource"
          class="recherche-ressource-page-ressource"
        />
        <legende-ressource-ce class="legende-ressource-page-ressource" />
      </aside>
      <main class="main-page-ressource">
        <liste-ressources-ce
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

<style scoped>
.cadre-page-ressource {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--ui-ressources-gar-default-text-color);
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
