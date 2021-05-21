import FilteringProvider from '@scandipwa/product/src/context/Filtering.provider';
import ProductListProvider from '@scandipwa/product/src/context/ProductList.provider';

import { PRODUCT_LIST_BLOCK_TYPE_KEY } from '../component/ProductListBlock/ProductListBlock.config';
import { getProductResultFromSection } from '../util/CmsProduct';

const renderFilterAndProductContext = (args, callback, instance) => {
    const originalContent = callback(...args);
    const section = instance.props.entity;
    const isHasProductListBlock = section.blocks.some(
        ({ type }) => type === PRODUCT_LIST_BLOCK_TYPE_KEY
    );

    if (!isHasProductListBlock) {
        return originalContent;
    }

    return (
        <FilteringProvider>
            <ProductListProvider
              productsResult={ getProductResultFromSection(section) }
            >
                { originalContent }
            </ProductListProvider>
        </FilteringProvider>
    );
};

export default {
    // TODO: determine if just the sidebar section could contain products
    'Cms/Component/CmsSectionSidebar/Component/CmsSectionSidebarComponent': {
        'member-function': {
            render: renderFilterAndProductContext
        }
    },
    'Cms/Component/CmsSectionDefault/Component/CmsSectionDefaultComponent': {
        'member-function': {
            render: renderFilterAndProductContext
        }
    }
};
