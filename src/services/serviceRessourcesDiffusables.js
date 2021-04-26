async function getRessourcesDiffusables(
    page,
    recherche
) {
    let promesseVide = new Promise(((resolve) => { resolve([]) }));
    try {
        return await fetch(
            'http://localhost:8090/mediacentre/api/ressources-diffusables' +
            '?ressourcesPerPage=20' +
            '&page=' + page +
            '&operator=OR' +
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
                return response.json();
            },
            (error) => {
                console.log('getRessourcesDiffusables(' + page + '): ' + error);
                return promesseVide;
            }
        )
    } catch (error) {
        console.log('getRessourcesDiffusables(' + page + '): ' + error);
        return promesseVide;
    }
}

async function getSize(
    recherche
) {
    let promesseVide = new Promise(((resolve) => { resolve(0) }));
    try {
        return await fetch(
            'http://localhost:8090/mediacentre/api/ressources-diffusables/size' +
            '?operator=OR' +
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
                return response.json();
            },
            (error) => {
                console.log('getSize(): ' + error);
                return promesseVide;
            }
        )
    } catch (error) {
        console.log('getSize(): ' + error);
        return promesseVide;
    }
}

export { getRessourcesDiffusables, getSize }
