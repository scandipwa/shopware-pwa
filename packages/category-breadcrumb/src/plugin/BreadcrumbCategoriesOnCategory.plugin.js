import Breadcrumb from '@scandipwa/breadcrumb/src/component/Breadcrumb';

import { CATEGORY_BREADCRUMB_KEY } from '../component/CategoryBreadcrumb/CategoryBreadcrumb.config';

const renderPBreadcrumbs = (member) => {
    member.addItem(
        () => (
            <Breadcrumb />
        ),
        CATEGORY_BREADCRUMB_KEY
    );

    return member;
};

export default {
    'Category/Component/Category/Component/CategoryComponent': {
        'member-property': {
            content: renderPBreadcrumbs
        }
    }
};
