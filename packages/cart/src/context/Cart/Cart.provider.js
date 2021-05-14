/* eslint-disable no-console */
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import {
    addToCart, createCart, removeFromCart, updateCartItems
} from '../../api/Cart.request';
import { convertProductToCartItem } from '../../util/CartItem';
import CartContext from './Cart.context';

export const CART = 'CART';

/** @namespace Cart/Context/Cart/Provider/CartProvider */
export class CartProvider extends PureComponent {
    state = {
        cart: {}
    };

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    __construct() {
        const { cart } = this.state;

        if (!Object.keys(cart).length) {
            this.state.cart = BrowserDatabase.getItem(CART);
        }
    }

    getContextValue = () => {
        const { cart } = this.state;

        return {
            createCart: this.createCart.bind(this),
            addToCart: this.addToCart.bind(this),
            removeFromCart: this.removeFromCart.bind(this),
            updateItemQuantity: this.updateItemQuantity.bind(this),
            cart
        };
    };

    _updateCartValue(cart) {
        BrowserDatabase.setItem(CART, cart);
        this.setState({ cart });
    }

    async createCart() {
        try {
            const cart = await createCart();

            this._updateCartValue(cart);

            return cart;
        } catch (error) {
            console.error(error);
            // TODO notify
        }

        return null;
    }

    findInCart(product) {
        const { cart } = this.state;

        if (!cart || !cart.lineItems) {
            return null;
        }

        return cart.lineItems.find((one) => one.referencedId === product.id);
    }

    async updateItemQuantity(cartItem, newQuantity) {
        if (newQuantity === 0) {
            return this.removeFromCart(cartItem);
        }

        try {
            const cart = await updateCartItems({
                items: [{
                    id: cartItem.id,
                    quantity: newQuantity
                }]
            });

            this._updateCartValue(cart);
        } catch (error) {
            console.error(error);
            // TODO notify
        }

        return null;
    }

    /**
     * Add a product to the cart
     * If such product already is in the cart -> increase quantity
     * Such a behavior might be prevented by setting the `forceCreateLine` flag
     */
    async addToCart(product, quantity = 1, forceCreateLine = false) {
        if (!forceCreateLine) {
            // Product already in cart -> update quantity
            const existingLineItem = this.findInCart(product);
            if (existingLineItem) {
                return this.updateItemQuantity(existingLineItem, existingLineItem.quantity + 1);
            }
        }

        // Product not in cart -> create line item
        const cartItem = convertProductToCartItem(product, quantity);
        try {
            const cart = await addToCart({ items: [cartItem] });

            this._updateCartValue(cart);

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
            : [lineItemOrItems.id];

        try {
            const cart = await removeFromCart({ ids });

            this._updateCartValue(cart);

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
