import ProductBoxSlot from '../component/ProductBoxSlot';
import { PRODUCT_BOX_SLOT_TYPE_KEY } from '../component/ProductBoxSlot/ProductBoxSlot.config';
import ProductListBlock from '../component/ProductListBlock';
import { PRODUCT_LIST_BLOCK_TYPE_KEY } from '../component/ProductListBlock/ProductListBlock.config';
import ProductListSlot from '../component/ProductListSlot';
import { PRODUCT_LIST_SLOT_TYPE_KEY } from '../component/ProductListSlot/ProductListSlot.config';
import SidebarFilterBlock from '../component/SidebarFilterBlock';
import { SIDEBAR_FILTER_BLOCK_TYPE_KEY } from '../component/SidebarFilterBlock/SidebarFilterBlock.config';

const addProductListingSlot = (slotTypeComponentMap) => ({
    ...slotTypeComponentMap,
    [PRODUCT_LIST_SLOT_TYPE_KEY]: ProductListSlot
});

const addProductBoxSlot = (slotTypeComponentMap) => ({
    ...slotTypeComponentMap,
    [PRODUCT_BOX_SLOT_TYPE_KEY]: ProductBoxSlot
});

const addProductListingBlock = (slotTypeComponentMap) => ({
    ...slotTypeComponentMap,
    [PRODUCT_LIST_BLOCK_TYPE_KEY]: ProductListBlock
});

const addSidebarFilterBlock = (slotTypeComponentMap) => ({
    ...slotTypeComponentMap,
    [SIDEBAR_FILTER_BLOCK_TYPE_KEY]: SidebarFilterBlock
});

export default {
    'Cms/Component/CmsContentFactory/ContentFactory/Component/ContentFactoryComponent': {
        'member-property': {
            slotTypeComponentMap: [
                addProductListingSlot,
                addProductBoxSlot
            ],
            blockTypeComponentMap: [
                addProductListingBlock,
                addSidebarFilterBlock
            ]
        }
    }
};
