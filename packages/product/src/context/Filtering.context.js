/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

import { DEFAULT_LIMIT } from '../api/Product.request';

const FilteringContext = createContext({
    properties: [],
    limit: DEFAULT_LIMIT,
    page: 1
});

FilteringContext.displayName = 'FilteringContext';

export default FilteringContext;
