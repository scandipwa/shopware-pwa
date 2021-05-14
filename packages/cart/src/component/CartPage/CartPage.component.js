import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { CartType } from '../../type/Cart.type';
import CartItem from '../CartItem';

/** @namespace Cart/Component/CartPage/Component/CartPageComponent */
export class CartPageComponent extends PureComponent {
    static propTypes = {
        cart: CartType.isRequired,
        isMounted: PropTypes.bool.isRequired
    };

    content = createSortedRenderMap([
        this.renderHeading.bind(this),
        this.renderCartItems.bind(this),
        this.renderSummary.bind(this)
    ]);

    renderHeading() {
        return <h1>Shopping Cart</h1>;
    }

    renderCartItems() {
        const { cart, isMounted } = this.props;

        // isMounted prevents mismatch between SSR and CSR for the initial hydration
        if (!isMounted || !cart || !cart.lineItems) {
            return <p>No items are in the cart yet</p>;
        }

        const { lineItems } = cart;

        return (
            <section>
                { lineItems.map((item) => <CartItem key={ item.id } item={ item } />) }
            </section>
        );
    }

    renderSummary() {
        return (
            <aside>
                <h2>Summary</h2>
            </aside>
        );
    }

    render() {
        return (
            <main>
                { this.content.render() }
            </main>
        );
    }
}

export default CartPageComponent;
