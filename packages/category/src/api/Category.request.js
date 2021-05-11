import Client from '@scandipwa/framework/src/util/Client';

/**
 *
 * @param {string} categoryId Category id
 * @returns {Promise<import('./Category.type').Category>}
 * @namespace Category/Api/Category/Request/getCategoryById
 */
export const getCategoryById = async (categoryId) => {
    const category = await Client.post(`/store-api/category/${categoryId}`);

    return category;
};
