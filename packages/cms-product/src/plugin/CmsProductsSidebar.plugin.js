/* eslint-disable fp/no-let */
/* eslint-disable no-continue */
import FilteringProvider from '@scandipwa/product/src/context/Filtering.provider';
import ProductListProvider from '@scandipwa/product/src/context/ProductList.provider';

import { PRODUCT_LIST_BLOCK_TYPE_KEY } from '../component/ProductListBlock/ProductListBlock.config';
import { PRODUCT_LIST_SLOT_TYPE_KEY } from '../component/ProductListSlot/ProductListSlot.config';

const getProductResultFromSection = (section) => {
    for (let i = 0; i < section.blocks.length; i++) {
        const block = section.blocks[i];

        if (block.type !== PRODUCT_LIST_BLOCK_TYPE_KEY) {
            continue;
        }

        for (let j = 0; j < block.slots.length; j++) {
            const slot = block.slots[j];

            if (slot.type !== PRODUCT_LIST_SLOT_TYPE_KEY) {
                continue;
            }

            const { data: { listing } } = slot;
            return listing;
        }
    }

    return {};
};

const renderFilterAndProductContext = (args, callback, instance) => {
    const originalContent = callback(...args);
    const section = instance.props.entity;
    const isHasProductListBlock = section.blocks.some(({ type }) => type === PRODUCT_LIST_BLOCK_TYPE_KEY);

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
            renderContent: renderFilterAndProductContext
        }
    },
    'Cms/Component/CmsSectionDefault/Component/CmsSectionDefaultComponent': {
        'member-function': {
            renderContent: renderFilterAndProductContext
        }
    }
};
