import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

/** @namespace Product/Component/ProductCard/Component/ProductCardComponent */
export class ProductCardComponent extends PureComponent {
    content = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default ProductCardComponent;
