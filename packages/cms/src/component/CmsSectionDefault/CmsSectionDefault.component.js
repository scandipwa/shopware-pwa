import { CmsEntityComponent } from '../CmsEntity/CmsEntity.component';

/** @namespace Cms/Component/CmsSectionDefault/Component/CmsSectionDefaultComponent */
export class CmsSectionDefaultComponent extends CmsEntityComponent {
    renderContent() {
        const { children } = this.props;
        return children;
    }
}

export default CmsSectionDefaultComponent;
