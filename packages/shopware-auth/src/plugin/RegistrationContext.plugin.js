/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import { RegistrationProvider } from '../context/Registration';

const REGISTRATION_PROVIDER_KEY = 'REGISTRATION_PROVIDER_KEY';

const addAuthProvider = (member) => {
    member.addItem(
        ({ children }) => (
            <RegistrationProvider>
                { children }
            </RegistrationProvider>
        ),
        REGISTRATION_PROVIDER_KEY
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
