async function getRessourcesDiffusables(
    page,
    recherche
) {
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
        {
            method: 'GET'
        }
    ).then(
        (response) => {
            if (response.status === 100) {
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

async function getSize(
    recherche
) {
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
        {
            method: 'GET'
        }
    ).then(
        (response) => {
            if (response.status === 100) {
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
