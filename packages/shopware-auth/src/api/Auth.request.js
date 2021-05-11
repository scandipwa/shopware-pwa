import client from '@scandipwa/framework/src/util/Client';

/** @namespace ShopwareAuth/Api/Auth/Request/register */
export const register = (body) => {
    client.post(
        '/store-api/account/register',
        { body }
    );
};
