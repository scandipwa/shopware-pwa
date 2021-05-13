import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { addToCart, createCart } from '../../api/Cart.request';
import { convertProductToCartItem } from '../../util/CartItem';
import CartContext from './Cart.context';

/** @namespace Cart/Context/Cart/Provider/CartProvider */
export class CartProvider extends PureComponent {
    state = {
        cart: {}
    };

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    getContextValue = () => {
        const { cart } = this.state;

        return {
            createCart: this.createCart.bind(this),
            addToCart: this.addToCart.bind(this),
            cart
        };
    };

    async createCart() {
        try {
            const cart = await createCart();

            this.setState({ cart });

            return cart;
        } catch (error) {
            console.error(error);
            // TODO notify
        }

        return null;
    }

    async addToCart(product) {
        const cartItem = convertProductToCartItem(product);

        try {
            const cart = await addToCart({
                items: [cartItem]
            });

            this.setState({ cart });

            return cart;
        } catch (error) {
            console.error(error);
            // TODO notify
        }

        return null;
    }

    render() {
        const { children } = this.props;

        return (
            <CartContext.Provider value={ this.getContextValue() }>
                { children }
            </CartContext.Provider>
        );
    }
}

export default CartProvider;
