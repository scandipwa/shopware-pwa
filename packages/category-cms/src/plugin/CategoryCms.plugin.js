import CategoryCms from '../component/CategoryCms';
import { CATGEORY_CMS_KEY } from '../component/CategoryCms/CategoryCms.config';

const addCmsFactoryRender = (content) => {
    content.addItem(
        () => <CategoryCms />,
        CATGEORY_CMS_KEY
    );

    return content;
};

export default {
    'Category/Component/Category/Component/CategoryComponent': {
        'member-property': {
            content: addCmsFactoryRender
        }
    }
};
