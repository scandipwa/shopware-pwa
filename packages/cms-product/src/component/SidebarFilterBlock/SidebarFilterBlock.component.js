import { CmsEntityComponent } from '@scandipwa/cms/src/component/CmsEntity/CmsEntity.component';
import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import FilterChips from '@scandipwa/product/src/component/FilterChips';
import FilterList from '@scandipwa/product/src/component/FilterList';

import { FILTER_CHIP_KEY, FILTER_LIST_KEY } from './SidebarFilterBlock.config';

/** @namespace CmsProduct/Component/SidebarFilterBlock/Component/SidebarFilterBlockComponent */
export class SidebarFilterBlockComponent extends CmsEntityComponent {
    content = createSortedRenderMap({
        [FILTER_LIST_KEY]: this.renderFilterList.bind(this),
        [FILTER_CHIP_KEY]: this.renderFilterChips.bind(this)
    });

    renderFilterChips() {
        return (
            <FilterChips />
        );
    }

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
