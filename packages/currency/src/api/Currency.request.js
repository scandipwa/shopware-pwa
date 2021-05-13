import Client from '@scandipwa/framework/src/util/Client';

export const DEFAULT_LIMIT = 10;

/**
 * @param {object} param0
 * @param {number} [param0.page]
 * @param {number} [param0.limit]
 * @param {{ name: string, field: string, value: string }[]} [param0.aggregations]
 * @param {{ name: string, field: string, value: string }[]} [param0.filter]
 * @param {{ name: string, field: string, value: string }[]} [param0.postFilter]
 * @param {{ field: string, order: string, naturalSorting: boolean }[]} [param0.sort]
 * @returns {Promise<import('./Currency.type').Currency[]>}
 * @namespace Currency/Api/Currency/Request/getCurrency */
export const getCurrency = async ({
    page = 1,
    limit = DEFAULT_LIMIT,
    aggregations = [],
    filter = [],
    postFilter = [],
    sort = []
} = {}) => {
    const currency = await Client.post('/store-api/currency', {
        body: {
            page,
            limit,
            aggregations,
            filter,
            sort,
            'post-filter': postFilter

        }
    });

    return currency;
};
