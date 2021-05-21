import { createContext } from 'react';

/**
 * @type {import('react').Context<{ props?: import('../api/NextPage.type').NextPageContextType }>}
 */
export const NextPageContext = createContext({ props: {} });
NextPageContext.displayName = 'NextPageProps';
export default NextPageContext;
