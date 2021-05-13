import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { addToCart, createCart, removeFromCart } from '../../api/Cart.request';
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

    async addToCart(product, quantity = 1) {
        const cartItem = convertProductToCartItem(product, quantity);

        try {
            const cart = await addToCart({ items: [cartItem] });

            this.setState({ cart });

            return cart;
        } catch (error) {
            console.error(error);
            // TODO notify
        }

        return null;
    }

    async removeFromCart(lineItemOrItems) {
        const ids = Array.isArray(lineItemOrItems)
            ? lineItemOrItems.map((item) => item.id)
            : lineItemOrItems.id;

        try {
            const cart = await removeFromCart({ ids });

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
