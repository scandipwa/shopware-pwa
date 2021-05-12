import Client from '@scandipwa/framework/src/util/Client';

/** @namespace SeoUrl/Api/SeoUrl/Request/getSeoUrlBySeoPathInfo */
export const getSeoUrlBySeoPathInfo = async (seoPathInfo) => {
    const { elements } = await Client.post('/store-api/seo-url', {
        body: {
            filter: [
                {
                    type: 'equals',
                    field: 'seoPathInfo',
                    value: seoPathInfo
                }
            ]
        }
    });

    if (!elements || !elements.length) {
        return null;
    }

    return elements[0];
};
