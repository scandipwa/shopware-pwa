import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import CartCalculatedTax from '../CartCalculatedTax/CartCalculatedTax.component';
import Price from '../Price';

/** @namespace Cart/Component/CartSummary/Component/CartSummaryComponent */
export class CartSummaryComponent extends PureComponent {
    static propTypes = {
        rawTotal: PropTypes.number.isRequired,
        netPrice: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
        calculatedTaxes: PropTypes.arrayOf(PropTypes.shape({
            tax: PropTypes.number,
            taxRate: PropTypes.string
        })).isRequired
    };

    content = createSortedRenderMap([
        this.renderRawTotal.bind(this),
        this.renderNetTotal.bind(this),
        this.renderCalculatedTaxes.bind(this),
        this.renderTotalPrice.bind(this)
    ]);

    renderRawTotal() {
        const { rawTotal } = this.props;

        return (
            <Price amount={ rawTotal } />
        );
    }

    renderTotalPrice() {
        const { totalPrice } = this.props;

        return (
            <Price amount={ totalPrice } />
        );
    }

    renderNetTotal() {
        const { netPrice } = this.props;

        return (
            <Price amount={ netPrice } />
        );
    }

    renderCalculatedTax({ tax, taxRate }) {
        return (
            <CartCalculatedTax
              tax={ tax }
              taxRate={ taxRate }
            />
        );
    }

    renderCalculatedTaxes() {
        const { calculatedTaxes } = this.props;
        return calculatedTaxes.map(this.renderCalculatedTax);
    }

    render() {
        return this.content.render();
    }
}

export default CartSummaryComponent;
