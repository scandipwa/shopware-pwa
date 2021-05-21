import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { CartContext } from '../../context/Cart';
import CartItemComponent from './CartItem.component';

// MAKE THIS USE PRODUCT CONTEXT

/** @namespace Cart/Component/CartItem/Container/CartItemContainer */
export class CartItemContainer extends HigherOrderComponent {
    increaseItemQty() {
        const {
            [CartContext.displayName]: { updateItemQuantity },
            item: { quantity },
            item
        } = this.props;

        updateItemQuantity(item, quantity + 1);
    }

    decreaseItemQty() {
        const {
            [CartContext.displayName]: { updateItemQuantity },
            item: { quantity },
            item
        } = this.props;

        updateItemQuantity(item, quantity - 1);
    }

    containerProps = () => {
        const {
            [CartContext.displayName]: { updateItemQuantity },
            item
        } = this.props;

        return {
            updateItemQuantity,
            item
        };
    };

    containerFunctions = ({
        increaseItemQty: this.increaseItemQty.bind(this),
        decreaseItemQty: this.decreaseItemQty.bind(this)
    });
}

export default withHOC(
    withContexts(CartItemContainer, CartContext),
    CartItemComponent
);
