import ProductListSlot from '../component/ProductListSlot';
import { PRODUCT_LIST_SLOT_TYPE_KEY } from '../component/ProductListSlot/ProductListSlot.config';

const addProductListingSlot = (slotTypeComponentMap) => ({
    ...slotTypeComponentMap,
    [PRODUCT_LIST_SLOT_TYPE_KEY]: ProductListSlot
});

export default {
    'Cms/Component/CmsContentFactory/ContentFactory/Component/ContentFactoryComponent': {
        'member-property': {
            slotTypeComponentMap: addProductListingSlot
            // blockTypeComponentMap:
        }
    }
};
