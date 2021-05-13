/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
import ProductContext from '@scandipwa/product/src/context/Product.context';
import { Typography } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Productui/Component/ProductPrice/Component/ProductPriceComponent */
export class ProductPriceComponent extends PureComponent {
    static contextType = ProductContext;

    /**
     * @returns {React.ContextType<typeof ProductContext>}
     */
    getContextValue() {
        return this.context;
    }

    render() {
        const { product: { calculatedPrice: { totalPrice } } } = this.getContextValue();

        return (
            <Typography type="caption">${ totalPrice }</Typography>
        );
    }
}

export default ProductPriceComponent;
