import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

import CmsContentFactory from '../../../../cms/src/component/CmsContentFactory';

/** @namespace Category/Component/Category/Component/CategoryComponent */
export class CategoryComponent extends PureComponent {
    content = createSortedRenderMap({
        test: () => {
            const { category } = this.props;

            return (
                <CmsContentFactory
                  sections={ category.cmsPage.sections }
                />
            );
        }
    });

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default CategoryComponent;
