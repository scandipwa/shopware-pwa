import client from '@scandipwa/framework/src/util/Client';

/** @namespace ShopwareAuth/Util/Config/fetchCountries */
export const fetchCountries = async () => {
    const response = await client.get('/store-api/country');

    return response.elements;
};

/** @namespace ShopwareAuth/Util/Config/fetchSalutations */
export const fetchSalutations = async () => {
    const response = await client.get('/store-api/salutation');

    return response.elements;
};
