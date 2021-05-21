import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import ProductProvider from '../../context/Product.provider';
import ProductComponent from './Product.component';

/** @namespace Product/Component/Product/Container/ProductContainer */
export class ProductContainer extends HigherOrderComponent {
    render() {
        const { product } = this.props;

        return (
            <ProductProvider product={ product }>
                { super.render() }
            </ProductProvider>
        );
    }
}

export default withHOC(ProductContainer, ProductComponent);
