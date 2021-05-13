/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import { CartProvider } from '../context/Cart';

const CART_PROVIDER_KEY = 'CART_PROVIDER_KEY';

const addCartProvider = (member) => {
    member.addItem(
        ({ children }) => (
            <CartProvider>
                { children }
            </CartProvider>
        ),
        CART_PROVIDER_KEY
    );

    return member;
};

export default {
    'Framework/Component/App/Component/AppComponent': {
        'member-property': {
            contextProviders: addCartProvider
        }
    }
};
