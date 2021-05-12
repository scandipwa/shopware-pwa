/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import ProductContext from './Product.context';

/** @namespace Product/Context/Product/Provider/ProductProvider */
export class ProductProvider extends ContextProvider {
    static propTypes = {
        ...ContextProvider.propTypes,
        product: PropTypes.shape({}).isRequired
    };

    getContextValue() {
        const { product } = this.props;
        return {
            ...super.getContextValue(),
            product
        };
    }
}

export default withProvider(ProductProvider, ProductContext.Provider);
