import { Notify } from 'notiflix/build/notiflix-notify-aio';


export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(result => {
            if (result.length > 10) {
                Notify.info('Too many matches found. Please enter a more specific name.')
            }
        })
        .catch(() => Notify.failure("Oops, there is no country with that name"));
}
    
    // function checkServerResponse(result) {
    //      if (result.length > 10) {
    //             Notify.info('Too many matches found. Please enter a more specific name.');
    //         } else if (result.length >= 2 && result.length <= 10) {
    //             // create markup with all countries
    //         } else if (result.length === 1) {
    //             // create markup of country with all its properties
    //         }
    // }
     
    



