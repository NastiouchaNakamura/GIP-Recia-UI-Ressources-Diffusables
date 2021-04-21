async function getRessourcesDiffusablesPage(
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
                console.log('getRessourcesDiffusablesPage(' + page + '): ' + error);
                return promesseVide;
            }
        )
    } catch (error) {
        console.log('getRessourcesDiffusablesPage(' + page + '): ' + error);
        return promesseVide;
    }
}

export { getRessourcesDiffusablesPage }
