import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import ProductProvider from '../../context/Product.provider';
import ProductComponent from './Product.component';

/** @namespace Product/Component/Product/Container/ProductContainer */
export class ProductContainer extends HigherOrderComponent {
    containerProps = () => {
        const { product } = this.props;

        return { product };
    };

    render() {
        const { product } = this.props;

        return (
            <ProductProvider value={ product }>
                { super.render() }
            </ProductProvider>
        );
    }
}

export default withHOC(ProductContainer, ProductComponent);
