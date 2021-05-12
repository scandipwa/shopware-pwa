/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{
 *  product?: import('../api/Product.type').Product[],
 *  aggregations?: { name: string, field: string, value: string }[],
//  *  sort?: { field: string, order: string, naturalSorting: boolean }[],
//  *  price: Record<string, unknown>
 * }>}
 */
const ProductContext = createContext({
    products: [],
    aggregations: {}
    // sort: [],
    // price: {}
});

ProductContext.displayName = 'CategoryContext';

export default ProductContext;
