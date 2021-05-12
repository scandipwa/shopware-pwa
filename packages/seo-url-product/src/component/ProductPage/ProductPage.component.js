import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import Product from '@scandipwa/product/src/component/Product';
import { PureComponent } from 'react';

/** @namespace SeoUrlProduct/Component/ProductPage/Component/ProductPageComponent */
export class ProductPageComponent extends PureComponent {
    static contextType = NextPageContext;

    render() {
        const { props: { product } } = this.context;

        return (
            <Product
              product={ product }
            />
        );
    }
}

export default ProductPageComponent;
