import Breadcrumb from '@scandipwa/breadcrumb/src/component/Breadcrumb';

import { PRODUCT_BREADCRUMB_KEY } from '../component/ProductBreadcrumb/ProductBreadcrumb.config';

const renderPBreadcrumbs = (member) => {
    member.addItem(
        () => (
            <Breadcrumb />
        ),
        PRODUCT_BREADCRUMB_KEY
    );

    return member;
};

export default {
    'Product/Component/Product/Component/ProductComponent': {
        'member-property': {
            content: renderPBreadcrumbs
        }
    }
};
