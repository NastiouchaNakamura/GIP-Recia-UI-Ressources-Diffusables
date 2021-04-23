async function getRessourcesDiffusables(
    page, 
    idRessource,
    nomRessource,
    idEditeur,
    distributeurCom,
    distributeurTech,
    affichable,
    diffusable
) {
    let promesseVide = new Promise(((resolve) => { resolve([]) }));
    try {
        return await fetch(
            'http://localhost:8090/mediacentre/api/ressources-diffusables?elementsParPage=100&page=' + page +
            (idRessource !== '' ? '&idRessource=' + idRessource : '') +
            (nomRessource !== '' ? '&nomRessource=' + nomRessource : '') +
            (idEditeur !== '' ? '&idEditeur=' + idEditeur : '') +
            (distributeurCom !== '' ? '&distributeurCom=' + distributeurCom : '') +
            (distributeurTech !== '' ? '&distributeurTech=' + distributeurTech : '') +
            (affichable !== '' ? '&affichable=' + affichable : '') +
            (diffusable !== '' ? '&diffusable=' + diffusable : ''),
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
    idRessource,
    nomRessource,
    idEditeur,
    distributeurCom,
    distributeurTech,
    affichable,
    diffusable
) {
    let promesseVide = new Promise(((resolve) => { resolve(0) }));
    try {
        return await fetch(
            'http://localhost:8090/mediacentre/api/ressources-diffusables/size?dummy=0' +
            (idRessource !== '' ? '&idRessource=' + idRessource : '') +
            (nomRessource !== '' ? '&nomRessource=' + nomRessource : '') +
            (idEditeur !== '' ? '&idEditeur=' + idEditeur : '') +
            (distributeurCom !== '' ? '&distributeurCom=' + distributeurCom : '') +
            (distributeurTech !== '' ? '&distributeurTech=' + distributeurTech : '') +
            (affichable !== '' ? '&affichable=' + affichable : '') +
            (diffusable !== '' ? '&diffusable=' + diffusable : ''),
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
