import { CmsEntityComponent } from '@scandipwa/cms/src/component/CmsEntity/CmsEntity.component';
import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import FilterList from '@scandipwa/product/src/component/FilterList';

import { FILTER_LIST_KEY } from './SidebarFilterBlock.config';

/** @namespace CmsProduct/Component/SidebarFilterBlock/Component/SidebarFilterBlockComponent */
export class SidebarFilterBlockComponent extends CmsEntityComponent {
    content = createSortedRenderMap({
        [FILTER_LIST_KEY]: this.renderFilterList.bind(this)
    });

    renderFilterList() {
        return (
            <FilterList />
        );
    }

    renderContent() {
        return this.content.render();
    }
}

export default SidebarFilterBlockComponent;
