// import PropTypes from 'prop-types';
import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

import { CartType } from '../../type/Cart.type';
import Price from '../Price';

/** @namespace Cart/Component/CartSummary/Component/CartSummaryComponent */
export class CartSummaryComponent extends PureComponent {
    static propTypes = {
        cart: CartType.isRequired
    };

    content = createSortedRenderMap([
        this.renderTotal.bind(this),
        this.renderNetTotal.bind(this),
        this.renderTax.bind(this),
        this.renderGrandTotal.bind(this)
    ]);

    renderTotal() {
        const {
            cart: {
                price: { netPrice = 0 } = {}
            } = {}
        } = this.props;

        return (
            <span>
                Total&nbsp;
                <Price amount={ netPrice } />
            </span>
        );
    }

    renderGrandTotal() {
        const {
            cart: {
                price: { totalPrice = 0 } = {}
            } = {}
        } = this.props;

        return (
            <span>
                Grand Total&nbsp;
                <Price amount={ totalPrice } />
            </span>
        );
    }

    renderNetTotal() {
        const {
            cart: {
                price: { netPrice = 0 } = {}
            } = {}
        } = this.props;

        return (
            <span>
                Net Total&nbsp;
                <Price amount={ netPrice } />
            </span>
        );
    }

    renderTax() {
        const {
            cart: {
                price: { calculatedTaxes = [] } = {}
            } = {}
        } = this.props;

        return (
            <div>
                { calculatedTaxes.map(({ taxRate, tax }) => (
                    <span>
                        Tax&nbsp;
                        { taxRate }
                        %&nbsp;
                        <Price amount={ tax } />
                    </span>
                )) }
            </div>
        );
    }

    render() {
        return (
            <div block="CartSummary">
                { this.content.render() }
            </div>
        );
    }
}

export default CartSummaryComponent;
