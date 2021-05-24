/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
import { createContext } from 'react';

/**
 * @type {import('react').Context<{ landing?: import('../api/Landing.type').Landing }>}
 */
const LandingContext = createContext({ landing: {} });
LandingContext.displayName = 'LandingContext';

export default LandingContext;
