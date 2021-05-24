/* eslint-disable no-param-reassign */
import { isBrowser } from '@scandipwa/framework/src/util/Browser';
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';

import { CONTEXT_TOKEN_KEY } from '../context/Context/Context.provider';

const CONTEXT_TOKEN_HEADER = 'sw-context-token';

const addTokenToHeaders = (headers = {}) => {
    const contextToken = BrowserDatabase.getItem(CONTEXT_TOKEN_KEY);

    if (contextToken) {
        headers[CONTEXT_TOKEN_HEADER] = contextToken;
    }

    return headers;
};

const updateTokenFromHeaders = (headers) => {
    const oldToken = BrowserDatabase.getItem(CONTEXT_TOKEN_KEY);
    const newToken = headers.get(CONTEXT_TOKEN_HEADER);

    if (oldToken !== newToken) {
        BrowserDatabase.setItem(CONTEXT_TOKEN_KEY, newToken);
    }
};

// Add context token to the headers
const _request = async (
    [method, url, options, ...restArgs],
    callback
) => {
    if (isBrowser) {
        // Get the context token from the store and use it in the headers
        options.headers = addTokenToHeaders(options.headers);
    }

    // Fetch the request
    const response = await callback(
        method,
        url,
        options,
        ...restArgs
    );

    if (isBrowser) {
        // Update the token with the one from the server
        updateTokenFromHeaders(response.headers);
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
