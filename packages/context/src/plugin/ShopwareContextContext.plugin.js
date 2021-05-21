/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import ContextProvider from '../context/Context/Context.provider';

const SHOPWARE_CONTEXT_PROVIDER_KEY = 'SHOPWARE_CONTEXT_PROVIDER_KEY';

const addContextProvider = (member) => {
    member.addItem(
        ({ children }) => (
            <ContextProvider>
                { children }
            </ContextProvider>
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
