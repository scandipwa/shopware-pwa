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
    baseHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers': '*',
        'sw-access-key': SW_ACCESS_KEY
    };

    async _request(method, url, { body, headers } = {}) {
        return fetch(url, {
            method,
            headers: {
                ...this.baseHeaders,
                ...headers
            },
            body: body ? JSON.stringify(body) : undefined
        });
    }

    async parseResponse(response) {
        const json = await response.json();

        if (response.ok) {
            return json;
        }

        throw json;
    }

    async post(url, { body, headers } = {}) {
        return this.parseResponse(await this._request(
            'POST',
            getHref(url),
            { body, headers }
        ));
    }

    async get(url, { headers } = {}) {
        return this.parseResponse(await this._request(
            'GET',
            getHref(url),
            { headers }
        ));
    }

    async delete(url, { body, headers } = {}) {
        return this.parseResponse(await this._request(
            'DELETE',
            getHref(url),
            { body, headers }
        ));
    }
}

export default new Client();
