import oidc from "@uportal/open-id-connect";
import axios from "axios";

async function getToken() {
  try {
    const { encoded } = await oidc({
      userInfoApiUrl: import.meta.env.VITE_USER_INFO_API_URI,
    });

    return encoded;
  } catch (e) {
    console.error(e);
  }
}

function getUrlParams(recherche) {
  return recherche !== ""
    ? `&operator=OR&idRessource=${recherche}&nomRessource=${recherche}&idEditeur=${recherche}&nomEditeur=${recherche}&distributeurCom=${recherche}&nomDistributeurCom=${recherche}&distributeurTech=${recherche}&nomDistributeurTech=${recherche}`
    : "";
}

async function getRessourcesDiffusables(page, recherche) {
  return await axios.get(
    import.meta.env.VITE_BASE_API_URI +
      import.meta.env.VITE_RESSOURCES_DIFFUSABLES_API_URI +
      `?ressourcesPerPage=20&page=${page}${getUrlParams(recherche)}`,
    {
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
        "content-type": "application/jwt",
      },
    }
  );
}

async function getSize(recherche) {
  return await axios.get(
    import.meta.env.VITE_BASE_API_URI +
      import.meta.env.VITE_RESSOURCES_DIFFUSABLES_SIZE_API_URI +
      "?" +
      getUrlParams(recherche),
    {
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
        "content-type": "application/jwt",
      },
    }
  );
}

export { getRessourcesDiffusables, getSize };
