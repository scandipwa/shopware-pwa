import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import ProductProvider from '../../context/Product.provider';
import ProductCardComponent from './ProductCard.component';

/** @namespace Product/Component/ProductCard/Container/ProductCardContainer */
export class ProductCardContainer extends HigherOrderComponent {
    render() {
        const { product } = this.props;

        return (
            <ProductProvider product={ product }>
                { super.render() }
            </ProductProvider>
        );
    }
}

export default withHOC(ProductCardContainer, ProductCardComponent);
