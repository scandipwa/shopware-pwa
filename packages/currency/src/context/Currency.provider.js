/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import CurrencyContext from './Currency.context';

/** @namespace Currency/Context/Currency/Provider/CurrencyProvider */
export class CurrencyProvider extends ContextProvider {
    static propTypes = {
        ...ContextProvider.propTypes,
        currency: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    };

    getContextValue() {
        const { currency } = this.props;
        return {
            ...super.getContextValue(),
            currency
        };
    }
}

export default withProvider(CurrencyProvider, CurrencyContext.Provider);
