import { CmsSlotComponent } from '@scandipwa/cms/src/component/CmsSlot/CmsSlot.component';
// import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
// import ProductList from '@scandipwa/product/src/component/ProductList';

/** @namespace CmsProduct/Component/ProductListSlot/Component/ProductListSlotComponent */
export class ProductListSlotComponent extends CmsSlotComponent {
    // content = createSortedRenderMap({
    //     [PRODUCTS_LIST_KEY]: this.renderProductList.bind(this)
    // });

    // renderProductList()

    renderContent() {
        return 'THIS IS LIST.';
    }
}

export default ProductListSlotComponent;
