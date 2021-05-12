import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

/** @namespace Product/Component/Product/Component/ProductComponent */
export class ProductComponent extends PureComponent {
    content = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default ProductComponent;
