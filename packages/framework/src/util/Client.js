import fetch from 'node-fetch';

import BrowserDatabase from './BrowserDatabase';

export const API_ENDPOINT = 'https://scandipwa.shopware.store';
export const SW_ACCESS_KEY = 'SWSCBHFSNTVMAWNZDNFKSHLAYW';

/** @namespace Framework/Util/Client/getHref */
export const getHref = (relativeUrl) => {
    const url = new URL(relativeUrl, API_ENDPOINT);

    return url.href;
};

/** @namespace Framework/Util/Client/Client */
export class Client {
    baseHeaders = {
        'Content-Type': 'application/json',
        'sw-access-key': SW_ACCESS_KEY
    };

    // TODO add sw-context-token to the headers from a plugin
    async _request(method, url, { body, headers } = {}) {
        const contextToken = BrowserDatabase.getItem('sw-context-token');

        const response = await fetch(url, {
            method,
            headers: {
                ...this.baseHeaders,
                'sw-context-token': contextToken,
                ...headers
            },
            body: body ? JSON.stringify(body) : undefined
        });

        return this.parseResponse(response);
    }

    async parseResponse(response) {
        const json = await response.json();

        if (response.ok) {
            return json;
        }

        throw json;
    }

    post(url, { body, headers } = {}) {
        return this._request(
            'POST',
            getHref(url),
            { body, headers }
        );
    }

    get(url, { headers } = {}) {
        return this._request(
            'GET',
            getHref(url),
            { headers }
        );
    }
}

export default new Client();
