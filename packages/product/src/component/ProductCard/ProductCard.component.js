import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

import ProductContext from '../../context/Product.context';

/** @namespace Product/Component/ProductCard/Component/ProductCardComponent */
export class ProductCardComponent extends PureComponent {
    static contextType = ProductContext;

    content = createSortedRenderMap({
    });

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default ProductCardComponent;
