/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import App from '../component/App';
import NextPageProvider from '../context/NextPage.provider';

const renderApp = ([{ Component, pageProps }]) => (
    <NextPageProvider props={ pageProps }>
        <App>
            <Component { ...pageProps } />
        </App>
    </NextPageProvider>
);

export default {
    'Pages/_app/Page': {
        function: renderApp
    }
};
