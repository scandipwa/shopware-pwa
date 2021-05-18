import { CmsSlotComponent } from '@scandipwa/cms/src/component/CmsSlot/CmsSlot.component';
import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import Pagination from '@scandipwa/product/src/component/Pagination';
import ProductList from '@scandipwa/product/src/component/ProductList';

import { PRODUCTS_LIST_KEY, PRODUCTS_PAGINATION_KEY } from './ProductListSlot.config';

/** @namespace CmsProduct/Component/ProductListSlot/Component/ProductListSlotComponent */
export class ProductListSlotComponent extends CmsSlotComponent {
    content = createSortedRenderMap({
        [PRODUCTS_LIST_KEY]: this.renderProductList.bind(this),
        [PRODUCTS_PAGINATION_KEY]: this.renderPagination.bind(this)
    });

    renderPagination() {
        return (
            <Pagination />
        );
    }

    renderProductList() {
        return (
            <ProductList />
        );
    }

    renderContent() {
        return this.content.render();
    }
}

export default ProductListSlotComponent;
