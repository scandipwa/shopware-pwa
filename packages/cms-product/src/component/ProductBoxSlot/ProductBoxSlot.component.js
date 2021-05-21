import { CmsSlotComponent } from '@scandipwa/cms/src/component/CmsSlot/CmsSlot.component';
import ProductCard from '@scandipwa/product/src/component/ProductCard';

/** @namespace CmsProduct/Component/ProductBoxSlot/Component/ProductBoxSlotComponent */
export class ProductBoxSlotComponent extends CmsSlotComponent {
    renderContent() {
        const { slot: { data: { product } } } = this.props;

        return (
            <ProductCard product={ product } />
        );
    }
}

export default ProductBoxSlotComponent;
