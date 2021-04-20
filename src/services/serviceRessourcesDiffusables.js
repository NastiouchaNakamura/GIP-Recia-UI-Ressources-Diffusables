function getRessourcesDiffusablesPage(page) {
    try {
        fetch(
            'http://localhost:8090/mediacentre/api/ressources-diffusables?page=' + page,
            {
                method: 'GET'
            }
        ).then(
            (response) => {
                return response.json();
            },
            (error) => {
                console.log('getRessourcesDiffusablesPage(' + page + '): ' + error);
                return [];
            }
        )
    } catch (error) {
        console.log('getRessourcesDiffusablesPage(' + page + '): ' + error);
        return [];
    }
}

export { getRessourcesDiffusablesPage }
