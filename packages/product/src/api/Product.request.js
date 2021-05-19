import Client from '@scandipwa/framework/src/util/Client';

export const DEFAULT_LIMIT = 24;
export const DEFAULT_SORT = 'name-asc';

/**
 * @param {string} productId Product id
 * @returns {Promise<import('./Product.type').Product>}
 * @namespace Product/Api/Product/Request/getProductById
 */
export const getProductById = async (productId) => {
    const product = await Client.post(`/store-api/product/${productId}`, {
        headers: {
            'sw-include-seo-urls': true
        }
    });

    return product;
};

/**
 * @param {object} param0
 * @param {number} [param0.page]
 * @param {number} [param0.limit]
 * @param {{ name: string, field: string, value: string }[]} [param0.aggregations]
 * @param {{ name: string, field: string, value: string }[]} [param0.filter]
 * @param {{ name: string, field: string, value: string }[]} [param0.postFilter]
 * @param {{ field: string, order: string, naturalSorting: boolean }[]} [param0.sort]
 * @returns {Promise<import('./Product.type').ProductsResult>}
 * @namespace Product/Api/Product/Request/getProducts
 */
export const getProducts = async ({
    page = 1,
    limit = DEFAULT_LIMIT,
    'min-price': minPrice,
    'max-price': maxPrice,
    properties,
    manufacturer,
    order = DEFAULT_SORT
} = {}) => {
    const products = await Client.post('/store-api/product', {
        body: {
            p: page,
            limit,
            'min-price': minPrice,
            'max-price': maxPrice,
            properties,
            manufacturer,
            order
        }
    });

    return products;
};
