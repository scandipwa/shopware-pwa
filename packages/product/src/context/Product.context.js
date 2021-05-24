/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<import('../api/Product.type').ProductContextType>}
 */
const ProductContext = createContext({
    product: {},
    configurator: []
});

ProductContext.displayName = 'ProductContext';

export default ProductContext;
