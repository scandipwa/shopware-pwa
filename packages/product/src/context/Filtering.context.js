/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{ filters?: {} }>}
 */
const FilteringContext = createContext({ filters: {} });
FilteringContext.displayName = 'FilteringContext';

export default FilteringContext;
