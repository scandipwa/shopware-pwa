import CmsContentFactory from '@scandipwa/cms/src/component/CmsContentFactory';
import LandingContext from '@scandipwa/landing/src/context/Landing.context';
import { PureComponent } from 'react';

/**
 * @augments {PureComponent<{entity: import('../../api/Cms.type').CmsEntity}>}
 * @namespace LandingCms/Component/LandingCms/Component/LandingCmsComponent */
export class LandingCmsComponent extends PureComponent {
    static contextType = LandingContext;

    renderContent() {
        /**
         * @type {React.ContextType<typeof LandingContext>}
         */
        const { landing: { cmsPage: { sections } } } = this.context;

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

export default LandingCmsComponent;
