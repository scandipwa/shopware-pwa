import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';
import ProductContext from '@scandipwa/product/src/context/Product.context';
import { AuthContext } from '@scandipwa/shopware-auth/src/context/Auth';

import CartContext from '../../context/Cart/Cart.context';
import RemoveFromCart from './CartPage.component';

/** @namespace Cart/Component/CartPage/Container/CartPageContainer */
export class CartPageContainer extends HigherOrderComponent {
    state = {
        isMounted: false
    };

    componentDidMount() {
        this.setState({ isMounted: true });
    }

    containerProps = () => {
        const {
            [CartContext.displayName]: { cart }
        } = this.props;

        const { isMounted } = this.state;

        return {
            cart,
            isMounted
        };
    };
}

export default withHOC(
    withContexts(
        CartPageContainer,
        [CartContext, ProductContext, AuthContext]
    ),
    RemoveFromCart
);
