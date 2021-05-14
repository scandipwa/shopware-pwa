import { CmsEntityComponent } from '@scandipwa/cms/src/component/CmsEntity/CmsEntity.component';

/** @namespace CmsProduct/Component/ProductListBlock/Component/ProductListBlockComponent */
export class ProductListBlockComponent extends CmsEntityComponent {
    renderContent() {
        const { children } = this.props;
        return children;
    }
}

export default ProductListBlockComponent;
