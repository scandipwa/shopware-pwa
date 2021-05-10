/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import App from '../component/App';

const renderAuthProvider = ([{ Component, pageProps }]) => (
    <App>
        <Component { ...pageProps } />
    </App>
);

export default {
    'Pages/_app/Page': {
        function: renderAuthProvider
    }
};
