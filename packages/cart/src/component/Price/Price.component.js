import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { CurrencyType } from '../../type/Currency.type';

/** @namespace Cart/Component/Price/Component/PriceComponent */
export class PriceComponent extends PureComponent {
    static propTypes = {
        amount: PropTypes.number.isRequired,
        currency: CurrencyType
    };

    static defaultProps = {
        currency: { symbol: '' }
    };

    render() {
        const {
            amount,
            currency: { symbol }
        } = this.props;

        return (
            <span>
                { symbol }
                &nbsp;
                { amount }
            </span>
        );
    }
}

export default PriceComponent;
