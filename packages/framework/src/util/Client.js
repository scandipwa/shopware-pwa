import fetch from 'node-fetch';

export const API_ENDPOINT = 'https://scandipwa.shopware.store';
export const SW_ACCESS_KEY = 'SWSCBHFSNTVMAWNZDNFKSHLAYW';

/** @namespace Framework/Util/Client/getHref */
export const getHref = (relativeUrl) => {
    const url = new URL(relativeUrl, API_ENDPOINT);

    return url.href;
};

/** @namespace Framework/Util/Client/Client */
export class Client {
    async _request(method, url, { body, headers } = {}) {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'sw-access-key': SW_ACCESS_KEY,
                ...headers
            },
            body: body ? JSON.stringify(body) : undefined
        });

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
