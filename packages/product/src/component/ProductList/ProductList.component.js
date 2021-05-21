import { PureComponent } from 'react';

import ProductListContext from '../../context/ProductList.context';
import ProductCard from '../ProductCard';

/** @namespace Product/Component/ProductList/Component/ProductListComponent */
export class ProductListComponent extends PureComponent {
    static contextType = ProductListContext;

    renderProduct = (product) => {
        const { _uniqueIdentifier } = product;

        return (
            <ProductCard
              product={ product }
              key={ _uniqueIdentifier }
            />
        );
    };

    renderProducts() {
        const { products } = this.context;
        return products.map(this.renderProduct);
    }

    renderContent() {
        return this.renderProducts();
    }

    render() {
        return this.renderContent();
    }
}

export default ProductListComponent;
