/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{ breadcrumbCategories?: import('@scandipwa/category/src/api/Category.type').Category[] }>}
 */
const BreadcrumbContext = createContext({
    breadcrumbCategories: [],
    isLoading: false
});

BreadcrumbContext.displayName = 'BreadcrumbContext';

export default BreadcrumbContext;
