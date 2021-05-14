/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
import { getTranslatedField } from '@scandipwa/framework/src/util/GetTranslatedField';
import ProductContext from '@scandipwa/product/src/context/Product.context';
import { Typography } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Productui/Component/ProductTitle/Component/ProductTitleComponent */
export class ProductTitleComponent extends PureComponent {
    static contextType = ProductContext;

    /**
     * @returns {React.ContextType<typeof ProductContext>}
     */
    getContextValue() {
        return this.context;
    }

    render() {
        const { product } = this.getContextValue();

        return (
            <Typography type="h1">{ getTranslatedField(product, 'name') }</Typography>
        );
    }
}

export default ProductTitleComponent;
