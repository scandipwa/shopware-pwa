import LandingCms from '../component/LandingCms';
import { LANDING_CMS_KEY } from '../component/LandingCms/LandingCms.config';

const addCmsFactoryRender = (content) => {
    content.addItem(
        () => <LandingCms />,
        LANDING_CMS_KEY
    );

    return content;
};

export default {
    'Landing/Component/Landing/Component/LandingComponent': {
        'member-property': {
            content: addCmsFactoryRender
        }
    }
};
