/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import { ShopwareContextProvider } from '../context/ShopwareContext';

const SHOPWARE_CONTEXT_PROVIDER_KEY = 'SHOPWARE_CONTEXT_PROVIDER_KEY';

const addContextProvider = (member) => {
    member.addItem(
        ({ children }) => (
            <ShopwareContextProvider>
                { children }
            </ShopwareContextProvider>
        ),
        SHOPWARE_CONTEXT_PROVIDER_KEY
    );

    return member;
};

export default {
    'Framework/Component/App/Component/AppComponent': {
        'member-property': {
            contextProviders: addContextProvider
        }
    }
};
