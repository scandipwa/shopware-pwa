import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';
import { AuthContext } from '@scandipwa/shopware-auth/src/context/Auth';

import CartContext from '../../context/Cart/Cart.context';
import { CartItemType } from '../../type/Cart.type';
import RemoveFromCart from './RemoveFromCart.component';

/** @namespace Cart/Component/RemoveFromCart/Container/RemoveFromCartContainer */
export class RemoveFromCartContainer extends HigherOrderComponent {
    static propTypes = {
        item: CartItemType.isRequired
    };

    containerFunctions = {
        handleClick: this.handleClick.bind(this)
    };

    async handleClick() {
        const {
            [CartContext.displayName]: { cart, removeFromCart },
            item
        } = this.props;

        if (!cart.token) {
            return;
        }

        await removeFromCart(item);
    }
}

export default withHOC(
    withContexts(
        RemoveFromCartContainer,
        [CartContext, AuthContext]
    ),
    RemoveFromCart
);
