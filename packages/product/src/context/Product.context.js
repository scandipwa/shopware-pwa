/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{ product?: import('../api/Product.type').Product }>}
 */
const ProductContext = createContext({ product: {} });
ProductContext.displayName = 'CategoryContext';

export default ProductContext;
