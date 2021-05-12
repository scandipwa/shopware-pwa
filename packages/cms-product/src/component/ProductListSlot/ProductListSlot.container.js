import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import ProductListSlotComponent from './ProductListSlot.component';

/** @namespace CmsProduct/Component/ProductListSlot/Container/ProductListSlotContainer */
export class ProductListSlotContainer extends HigherOrderComponent {

}

export default withHOC(ProductListSlotContainer, ProductListSlotComponent);
