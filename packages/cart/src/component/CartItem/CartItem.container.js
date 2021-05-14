import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { CartContext } from '../../context/Cart';
import CartItemComponent from './CartItem.component';

/** @namespace Cart/Component/CartItem/Container/CartItemContainer */
export class CartItemContainer extends HigherOrderComponent {
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
}

export default withHOC(
    withContexts(CartItemContainer, CartContext),
    CartItemComponent
);
