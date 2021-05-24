// import PropTypes from 'prop-types';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { CartContext } from '../../context/Cart';
import CartSummary from './CartSummary.component';

/** @namespace Cart/Component/CartSummary/Container/CartSummaryContainer */
export class CartSummaryContainer extends HigherOrderComponent {
    getNetTotal() {
        const {
            [CartContext.displayName]: {
                cart: {
                    price: { netPrice = 0 } = {}
                } = {}
            }
        } = this.props;

        return netPrice;
    }

    getRawTotal() {
        const {
            [CartContext.displayName]: {
                cart: {
                    price: { rawTotal = 0 } = {}
                } = {}
            }
        } = this.props;

        return rawTotal;
    }

    getTotalPrice() {
        const {
            [CartContext.displayName]: {
                cart: {
                    price: { totalPrice = 0 } = {}
                } = {}
            }
        } = this.props;

        return totalPrice;
    }

    getCalculatedTaxes() {
        const {
            cart: {
                price: { calculatedTaxes = [] } = {}
            } = {}
        } = this.props;

        return calculatedTaxes;
    }

    containerProps = () => ({
        rawTotal: this.getRawTotal(),
        netPrice: this.getNetTotal(),
        getTotalPrice: this.getTotalPrice(),
        calculatedTaxes: this.getCalculatedTaxes()
    });
}

export default withHOC(
    withContexts(CartSummaryContainer, CartContext),
    CartSummary
);
