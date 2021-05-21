/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import { AuthProvider } from '../context/Auth';

const AUTH_PROVIDER_KEY = 'AUTH_PROVIDER_KEY';

const addAuthProvider = (member) => {
    member.addItem(
        ({ children }) => (
            <AuthProvider>
                { children }
            </AuthProvider>
        ),
        AUTH_PROVIDER_KEY
    );

    return member;
};

export default {
    'Framework/Component/App/Component/AppComponent': {
        'member-property': {
            contextProviders: addAuthProvider
        }
    }
};
