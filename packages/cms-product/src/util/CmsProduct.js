/* eslint-disable fp/no-let */
/* eslint-disable no-continue */
import { PRODUCT_LIST_BLOCK_TYPE_KEY } from '../component/ProductListBlock/ProductListBlock.config';
import { PRODUCT_LIST_SLOT_TYPE_KEY } from '../component/ProductListSlot/ProductListSlot.config';

/** @namespace CmsProduct/Util/CmsProduct/getProductResultFromSection */
export const getProductResultFromSection = (section) => {
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
