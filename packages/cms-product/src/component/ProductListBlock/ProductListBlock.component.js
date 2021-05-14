import { CmsSlotComponent } from '@scandipwa/cms/src/component/CmsSlot/CmsSlot.component';

/** @namespace CmsProduct/Component/ProductListBlock/Component/ProductListBlockComponent */
export class ProductListBlockComponent extends CmsSlotComponent {
    renderContent() {
        const { children } = this.props;
        return children;
    }
}

export default ProductListBlockComponent;
