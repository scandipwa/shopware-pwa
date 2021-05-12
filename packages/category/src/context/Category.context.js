/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{ category?: import('../api/Category.type').Category }>}
 */
const CategoryContext = createContext({ category: {} });
CategoryContext.displayName = 'CategoryContext';

export default CategoryContext;
