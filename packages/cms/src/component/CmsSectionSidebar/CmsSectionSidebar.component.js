import { CmsEntityComponent } from '../CmsEntity/CmsEntity.component';

/** @namespace Cms/Component/CmsSectionSidebar/Component/CmsSectionSidebarComponent */
export class CmsSectionSidebarComponent extends CmsEntityComponent {
    renderContent() {
        const { children } = this.props;
        return children;
    }
}

export default CmsSectionSidebarComponent;
