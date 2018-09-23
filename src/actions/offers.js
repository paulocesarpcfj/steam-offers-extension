require('es6-promise').polyfill();
require('isomorphic-fetch');

export const FETCH = 'offers/FETCH';
export const SEARCH = 'offers/SEARCH';

export function fetchOffers(page, searchFor) {
    let URL = `https://node-crawler-steam-offers.herokuapp.com/?page=${page}`;

    if (searchFor) {
        URL += `&searchFor=${searchFor}`;
    }

    const request = fetch(URL).then(res => res.json());

    if (searchFor) {
        return {
            type: SEARCH,
            payload: request,
        };
    }

    return {
        type: FETCH,
        payload: request,
    };
}
