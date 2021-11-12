import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('input#search-box'),
}


refs.input.addEventListener('input', debounce(onInputFunc, DEBOUNCE_DELAY));




function onInputFunc() {
    const inputValue = refs.input.value.trim();
    console.log(inputValue);
}


// function createCountryList(countries) {
//     const markup = countries.map(({ name, flag }) => {
//         `<li>${flag.svg}${name.official}</li>`
//     }).join('')
    
// }

