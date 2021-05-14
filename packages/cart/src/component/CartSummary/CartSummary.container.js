// import PropTypes from 'prop-types';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { CartContext } from '../../context/Cart';
import CartSummary from './CartSummary.component';

/** @namespace Cart/Component/CartSummary/Container/CartSummaryContainer */
export class CartSummaryContainer extends HigherOrderComponent {
    containerProps = () => {
        const {
            [CartContext.displayName]: { cart }
        } = this.props;

        return {
            cart
        };
    };
}

export default withHOC(
    withContexts(CartSummaryContainer, CartContext),
    CartSummary
);
