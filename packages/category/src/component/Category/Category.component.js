import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

/** @namespace Category/Component/Category/Component/CategoryComponent */
export class CategoryComponent extends PureComponent {
    content = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default CategoryComponent;
