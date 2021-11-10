export function fetchCountries () {
    return fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error=>console.log(error))
     
    
}


