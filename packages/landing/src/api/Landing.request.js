import Client from '@scandipwa/framework/src/util/Client';

export const DEFAULT_LIMIT = 10;

/**
 * @param {string} landingId Landing page id
 * @returns {Promise<import('./Landing.type').Landing>}
 * @namespace Landing/Api/Landing/Request/getLandingById */
export const getLandingById = async (landingId) => {
    const landing = await Client.post(`/store-api/landing-page/${landingId}`);

    return landing;
};
