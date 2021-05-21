import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';
import ProductContext from '@scandipwa/product/src/context/Product.context';
import { AuthContext } from '@scandipwa/auth/src/context/Auth';

import CartContext from '../../context/Cart/Cart.context';
import AddToCart from './AddToCart.component';

/** @namespace Cart/Component/AddToCart/Container/AddToCartContainer */
export class AddToCartContainer extends HigherOrderComponent {
    containerFunctions = {
        handleClick: this.handleClick.bind(this)
    };

    async handleClick() {
        const {
            [CartContext.displayName]: { cart, createCart, addToCart },
            [ProductContext.displayName]: { product },
            [AuthContext.displayName]: { register, token }
        } = this.props;

        if (!token) {
            await register({ guest: true });
        }

        if (!cart || !cart.token) {
            await createCart();
        }

        await addToCart(product);
    }
}

export default withHOC(
    withContexts(
        AddToCartContainer,
        [CartContext, ProductContext, AuthContext]
    ),
    AddToCart
);
