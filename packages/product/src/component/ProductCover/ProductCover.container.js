import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import ProductContext from '../../context/Product.context';
import ProductCoverComponent from './ProductCover.component';

/** @namespace Product/Component/ProductCover/Container/ProductCoverContainer */
export class ProductCoverContainer extends HigherOrderComponent {
    static contextType = ProductContext;

    containerProps = () => {
        const {
            product: {
                cover: {
                    media: {
                        thumbnails,
                        translated: {
                            title
                        }
                    }
                }
            }
        } = this.context;

        const [img, ...sources] = thumbnails.sort(({ width: A }, { width: B }) => A - B);

        return {
            img,
            sources,
            alt: title
        };
    };
}

export default withHOC(ProductCoverContainer, ProductCoverComponent);
