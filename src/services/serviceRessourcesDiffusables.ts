import oidc from "@uportal/open-id-connect";
import axios from "axios";

const {
  VITE_BASE_API_URI,
  VITE_RESSOURCES_DIFFUSABLES_API_URI,
  VITE_RESSOURCES_DIFFUSABLES_SIZE_API_URI,
  VITE_USER_INFO_API_URI,
} = import.meta.env;

async function getToken(): Promise<string | undefined> {
  try {
    const { encoded } = await oidc({
      userInfoApiUrl: VITE_USER_INFO_API_URI,
    });

    return encoded;
  } catch (e) {
    console.error(e);
  }
}

function getUrlParams(recherche: string): string {
  return recherche !== ""
    ? `&operator=OR&idRessource=${recherche}&nomRessource=${recherche}&idEditeur=${recherche}&nomEditeur=${recherche}&distributeurCom=${recherche}&nomDistributeurCom=${recherche}&distributeurTech=${recherche}&nomDistributeurTech=${recherche}`
    : "";
}

async function getRessourcesDiffusables(page: number, recherche: string) {
  return await axios.get(
    `${VITE_BASE_API_URI}${VITE_RESSOURCES_DIFFUSABLES_API_URI}?ressourcesPerPage=20&page=${page}${getUrlParams(
      recherche
    )}`,
    {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
        "content-type": "application/jwt",
      },
    }
  );
}

async function getSize(recherche: string) {
  return await axios.get(
    `${VITE_BASE_API_URI}${VITE_RESSOURCES_DIFFUSABLES_SIZE_API_URI}?${getUrlParams(
      recherche
    )}`,
    {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
        "content-type": "application/jwt",
      },
    }
  );
}

export { getRessourcesDiffusables, getSize };
