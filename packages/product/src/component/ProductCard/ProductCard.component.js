import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { Card } from '@virtual-module/ui';
import { PureComponent } from 'react';

import ProductContext from '../../context/Product.context';
import ProductCover from '../ProductCover';

/** @namespace Product/Component/ProductCard/Component/ProductCardComponent */
export class ProductCardComponent extends PureComponent {
    static contextType = ProductContext;

    content = createSortedRenderMap({
    });

    actions = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    renderCover() {
        return (
            <ProductCover />
        );
    }

    render() {
        return (
            <Card
              actions={ this.actions.getSortedMap().values }
              cover={ this.renderCover() }
            >
                { this.renderContent() }
            </Card>
        );
    }
}

export default ProductCardComponent;
