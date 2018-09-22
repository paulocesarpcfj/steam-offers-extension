require('es6-promise').polyfill();
require('isomorphic-fetch');

export const FETCH = 'offers/FETCH';

export function fetchOffers(page) {
    const request = fetch(`https://node-crawler-steam-offers.herokuapp.com/?page=${page}`).then(res => res.json());
    return {
        type: FETCH,
        payload: request,
    };
}
