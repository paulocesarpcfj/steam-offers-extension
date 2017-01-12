require('es6-promise').polyfill();
require('isomorphic-fetch');

export const FETCH = 'offers/FETCH';

export function fetchOffers() {
    const request = fetch('https://node-crawler-steam-offers.herokuapp.com/api/offers.json').then(res => res.json());
    return {
        type: FETCH,
        payload: request,
    };
}
