import { createContext } from 'react';

// eslint-disable-next-line @scandipwa/scandipwa-guidelines/export-level-one
const NextPageContext = createContext({ props: {} });
NextPageContext.displayName = 'NextPageProps';
export default NextPageContext;
