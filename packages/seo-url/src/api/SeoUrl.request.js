import Client from '@scandipwa/framework/src/util/Client';

/**
 * @param {object} param0
 * @param {number} [param0.page]
 * @param {number} [param0.limit]
 * @param {{ name: string, field: string, value: string }[]} [param0.aggregations]
 * @param {{ name: import('@scandipwa/framework').FilterTypes, field: keyof import('./SeoUrl.type').SeoUrl, value: string }[]} [param0.filter]
 * @param {{ name: string, field: string, value: string }[]} [param0.postFilter]
 * @param {{ field: string, order: string, naturalSorting: boolean }[]} [param0.sort]
 * @param {string[]} [param0.grouping] Perform groupings over certain fields
 * @returns {Promise<import('./SeoUrl.type').SeoUrlResult>}
 * @namespace SeoUrl/Api/SeoUrl/Request/getSeoUrl
 */
export const getSeoUrl = async ({
    page,
    limit,
    sort = [],
    filter = [],
    aggregations = [],
    postFilter = []
} = {}) => {
    const seoUrls = await Client.post('/store-api/seo-url', {
        body: {
            limit,
            page,
            filter,
            'post-filter': postFilter,
            sort,
            aggregations
        }
    });

    return seoUrls;
};

/**
 * @param {string} seoPathInfo
 * @namespace SeoUrl/Api/SeoUrl/Request/getSeoUrlBySeoPathInfo
 */
export const getSeoUrlBySeoPathInfo = async (seoPathInfo) => {
    const { elements } = await getSeoUrl({
        filter: [
            {
                name: 'equals',
                field: 'seoPathInfo',
                value: seoPathInfo
            }
        ]
    });

    if (!elements || !elements.length) {
        return null;
    }

    return elements[0];
};
