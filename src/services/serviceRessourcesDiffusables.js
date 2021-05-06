import oidc from "@uportal/open-id-connect";

async function getRessourcesDiffusables(
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
        'http://localhost:8090/mediacentre/api/ressources-diffusables' +
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
        'http://localhost:8090/mediacentre/api/ressources-diffusables/size?dummy=0' +
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
                throw new Error('HTTP Response Code: ' + response.status);
            }
        },
        (error) => {
            throw error;
        }
    )
}

export { getRessourcesDiffusables, getSize }
