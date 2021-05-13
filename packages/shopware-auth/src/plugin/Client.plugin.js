/* eslint-disable no-param-reassign */
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';

export const CONTEXT_TOKEN_KEY = 'sw-context-token';

// Add context token to the headers
const _request = async (
    [method, url, { body, headers = {} }],
    callback
) => {
    const isBrowser = typeof window !== 'undefined';

    // Get the context token from the store and use it in the headers
    if (isBrowser) {
        const contextToken = BrowserDatabase.getItem(CONTEXT_TOKEN_KEY);
        headers['sw-context-token'] = contextToken;
    }

    // Fetch the request
    const response = await callback(method, url, { body, headers });

    // Update the token with the one from the server
    if (isBrowser) {
        const newToken = response.headers.get(CONTEXT_TOKEN_KEY);

        if (newToken) {
            BrowserDatabase.setItem(CONTEXT_TOKEN_KEY, newToken);
        }
    }

    return response;
};

export default {
    'Framework/Util/Client/Client': {
        'member-function': {
            _request
        }
    }
};
