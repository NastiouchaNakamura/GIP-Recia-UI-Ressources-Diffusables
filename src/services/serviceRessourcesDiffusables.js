import oidc from "@uportal/open-id-connect";

async function getRessourcesDiffusables(
    ressourcesDiffusablesApiUrl,
    userInfoApiUrl,
    page,
    recherche
) {
    const options = {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            Authorization: 'Bearer ' + (await oidc({ userInfoApiUrl: userInfoApiUrl })).encoded,
            'content-type': 'application/jwt'
        }
    };

    return await fetch(
        ressourcesDiffusablesApiUrl +
        '?ressourcesPerPage=20' +
        '&page=' + page +
        (recherche !== '' ? '&operator=OR' : '') +
        (recherche !== '' ? '&idRessource=' + recherche : '') +
        (recherche !== '' ? '&nomRessource=' + recherche : '') +
        (recherche !== '' ? '&idEditeur=' + recherche : '') +
        (recherche !== '' ? '&nomEditeur=' + recherche : '') +
        (recherche !== '' ? '&distributeurCom=' + recherche : '') +
        (recherche !== '' ? '&nomDistributeurCom=' + recherche : '') +
        (recherche !== '' ? '&distributeurTech=' + recherche : '') +
        (recherche !== '' ? '&nomDistributeurTech=' + recherche : ''),
        options
    ).then(
        (response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('HTTP Response Code ' + response.status);
            }
        },
        (error) => {
            throw error;
        }
    )
}

async function getSize(
    ressourcesDiffusablesSizeApiUrl,
    userInfoApiUrl,
    recherche
) {
    const options = {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            Authorization: 'Bearer ' + (await oidc({ userInfoApiUrl: userInfoApiUrl })).encoded,
            'content-type': 'application/jwt'
        }
    };

    return await fetch(
        ressourcesDiffusablesSizeApiUrl +
        '?operator=OR' +
        (recherche !== '' ? '&idRessource=' + recherche : '') +
        (recherche !== '' ? '&nomRessource=' + recherche : '') +
        (recherche !== '' ? '&idEditeur=' + recherche : '') +
        (recherche !== '' ? '&nomEditeur=' + recherche : '') +
        (recherche !== '' ? '&distributeurCom=' + recherche : '') +
        (recherche !== '' ? '&nomDistributeurCom=' + recherche : '') +
        (recherche !== '' ? '&distributeurTech=' + recherche : '') +
        (recherche !== '' ? '&nomDistributeurTech=' + recherche : ''),
        options
    ).then(
        (response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('HTTP Response Code: ' + response.status);
            }
        },
        (error) => {
            throw error;
        }
    )
}

export { getRessourcesDiffusables, getSize }
