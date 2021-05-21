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
const ProductListContext = createContext({
    products: []
});

ProductListContext.displayName = 'ProductListContext';

export default ProductListContext;
