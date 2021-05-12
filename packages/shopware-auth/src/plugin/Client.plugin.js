/* eslint-disable no-param-reassign */
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';

// Add context token to the headers
const _request = async (
    [method, url, { body, headers = {} }],
    callback
) => {
    const isBrowser = typeof window !== 'undefined';

    // Get the context token from the store and use it in the headers
    if (isBrowser) {
        const contextToken = BrowserDatabase.getItem('sw-context-token');
        headers['sw-context-token'] = contextToken;
    }

    // Fetch the request
    const response = await callback(method, url, { body, headers });

    // Update the token with the one from the server
    if (isBrowser) {
        const { 'sw-context-token': newContextToken } = response.headers;
        BrowserDatabase.setItem('newContextToken', newContextToken);
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
