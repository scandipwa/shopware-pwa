import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

/** @namespace Breadcrumb/Component/Breadcrumb/Component/BreadcrumbComponent */
export class BreadcrumbComponent extends PureComponent {
    content = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default BreadcrumbComponent;
