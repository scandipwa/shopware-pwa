import fetch from 'node-fetch';

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
        return this._request('POST', url, { body, headers });
    }

    get(url, { headers } = {}) {
        return this._request('GET', url, { headers });
    }
}

export default new Client();
