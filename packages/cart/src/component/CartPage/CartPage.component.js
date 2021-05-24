import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { CartType } from '../../type/Cart.type';
import CartItem from '../CartItem';
import CartSummary from '../CartSummary';

/** @namespace Cart/Component/CartPage/Component/CartPageComponent */
export class CartPageComponent extends PureComponent {
    static propTypes = {
        cart: CartType.isRequired,
        isMounted: PropTypes.bool.isRequired
    };

    content = createSortedRenderMap([
        this.renderCartItems.bind(this),
        this.renderSummary.bind(this)
    ]);

    renderCartItems() {
        const { cart, isMounted } = this.props;

        // isMounted prevents mismatch between SSR and CSR for the initial hydration
        if (!isMounted || !cart || !cart.lineItems) {
            return <p>No items are in the cart yet</p>;
        }

        const { lineItems } = cart;

        // TODO: move to CartItems component, remove markup

        return (
            <section>
                { lineItems.map((item) => <CartItem key={ item.id } item={ item } />) }
            </section>
        );
    }

    renderSummary() {
        return (
            <CartSummary />
        );
    }

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default CartPageComponent;
