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

    getProduct() {
        const { product: { product } } = this.props;
        return product;
    }

    getConfiguration() {
        const { product: { configurator } } = this.props;
        return configurator;
    }

    getContextValue() {
        return {
            ...super.getContextValue(),
            product: this.getProduct(),
            configuration: this.getConfiguration()
        };
    }
}

export default withProvider(ProductProvider, ProductContext.Provider);
