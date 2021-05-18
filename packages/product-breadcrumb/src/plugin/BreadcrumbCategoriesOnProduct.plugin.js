import BreadcrumbProvider from '@scandipwa/breadcrumb/src/context/Breadcrumb.provider';

import ProductBreadcrumbComponent from '../component/ProductBreadcrumb';
import { PRODUCT_BREADCRUMB_KEY } from '../component/ProductBreadcrumb/ProductBreadcrumb.config';

const renderPBreadcrumbs = (member) => {
    member.addItem(
        () => (
            <BreadcrumbProvider>
                <ProductBreadcrumbComponent />
            </BreadcrumbProvider>
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
