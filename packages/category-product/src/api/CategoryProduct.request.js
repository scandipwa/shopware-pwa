import Client from '@scandipwa/framework/src/util/Client';
import { DEFAULT_LIMIT } from '@scandipwa/product/src/api/Product.request';

/**
 * @param {object} param0
 * @param {number} [param0.page]
 * @param {number} [param0.limit]
 * @param {{ name: string, field: string, value: string }[]} [param0.aggregations]
 * @param {{ name: string, field: string, value: string }[]} [param0.filter]
 * @param {{ name: string, field: string, value: string }[]} [param0.postFilter]
 * @param {{ field: string, order: string, naturalSorting: boolean }[]} [param0.sort]
 * @returns {Promise<import('./Product.type').ProductsResult>}
 * @namespace CategoryProduct/Api/CategoryProduct/Request/getCategoryProducts */
export const getCategoryProducts = async (
    categoryId,
    {
        page = 1,
        limit = DEFAULT_LIMIT,
        'min-price': minPrice,
        'max-price': maxPrice,
        properties,
        manufacturer,
        sort = []
    } = {}
) => {
    const products = await Client.post(`/store-api/product-listing/${ categoryId }`, {
        body: {
            p: page,
            limit,
            'min-price': minPrice,
            'max-price': maxPrice,
            properties,
            manufacturer,
            sort
        }
    });

    return products;
};
