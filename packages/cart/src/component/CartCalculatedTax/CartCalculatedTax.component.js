import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Price from '../Price';

/** @namespace Cart/Component/CartCalculatedTax/Component/CartCalculatedTaxComponent */
export class CartCalculatedTaxComponent extends PureComponent {
    static propTypes = {
        tax: PropTypes.number.isRequired,
        taxRate: PropTypes.string.isRequired
    };

    renderTax() {
        const { tax } = this.props;
        return <Price amount={ tax } />;
    }

    renderTaxRate() {
        const { taxRate } = this.props;
        return taxRate;
    }

    renderContent() {
        return (
            <>
                { this.renderTax() }
                { this.renderTaxRate() }
            </>
        );
    }

    render() {
        return this.renderContent();
    }
}

export default CartCalculatedTaxComponent;
