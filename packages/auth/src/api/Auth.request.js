import client from '@scandipwa/framework/src/util/Client';

/** @namespace Auth/Api/Auth/Request/register */
export const register = (body) => {
    // TODO figure this out
    // const storefrontUrl = window.location.origin;
    const storefrontUrl = 'https://scandipwa.shopware.store';

    return client.post(
        '/store-api/account/register',
        {
            body: {
                ...body,
                storefrontUrl
            }
        }
    );
};

/** @namespace Auth/Api/Auth/Request/login */
export const login = (body) => client.post(
    '/store-api/account/login',
    { body }
);
