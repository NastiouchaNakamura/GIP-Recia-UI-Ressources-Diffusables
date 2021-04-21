async function getRessourcesDiffusablesPage(page) {
    let promesseVide = new Promise(((resolve) => { resolve([]) }));
    try {
        return await fetch(
            'http://localhost:8090/mediacentre/api/ressources-diffusables?elementsParPage=100&page=' + page + '&nomElement=1234',
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
