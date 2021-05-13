/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{ currency?: import('../api/Currency.type').Currency[] }>}
 */
const CurrencyContext = createContext({ currency: [] });
CurrencyContext.displayName = 'CurrencyContext';

export default CurrencyContext;
