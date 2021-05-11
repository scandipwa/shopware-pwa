/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{ page?: import('../api/Page.type').PwaPageResult }>}
 */
const CategoryContext = createContext({ page: {} });
CategoryContext.displayName = 'CategoryPageContext';

export default CategoryContext;
