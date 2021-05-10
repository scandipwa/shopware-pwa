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
    _request(method, url, { body, headers } = {}) {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: body ? JSON.stringify(body) : undefined
        }).then(
            /** @namespace Framework/Util/Client/fetch/then */
            (res) => {
                const json = res.json();

                if (res.ok) {
                    return json;
                }

                throw json;
            }
        );
    }

    post(url, { body, headers } = {}) {
        return this._request(
            'POST',
            getHref(url),
            {
                body,
                headers: { 'sw-access-key': SW_ACCESS_KEY, ...headers }
            }
        );
    }

    get(url, { headers } = {}) {
        return this._request(
            'GET',
            getHref(url),
            { headers: { 'sw-access-key': SW_ACCESS_KEY, ...headers } }
        );
    }
}

export default new Client();
