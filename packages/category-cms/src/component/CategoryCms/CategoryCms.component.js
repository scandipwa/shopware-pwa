import CategoryContext from '@scandipwa/category/src/context/Category.context';
import CmsContentFactory from '@scandipwa/cms/src/component/CmsContentFactory';
import { PureComponent } from 'react';

/**
 * @augments {PureComponent<{entity: import('../../api/Cms.type').CmsEntity}>}
 * @namespace CategoryCms/Component/CategoryCms/Component/CategoryCmsComponent */
export class CategoryCmsComponent extends PureComponent {
    static contextType = CategoryContext;

    renderContent() {
        const {
            category: {
                cmsPage: {
                    sections
                }
            }
        } = this.context;

        return (
            <CmsContentFactory
              sections={ sections }
            />
        );
    }

    render() {
        return this.renderContent();
    }
}

export default CategoryCmsComponent;
