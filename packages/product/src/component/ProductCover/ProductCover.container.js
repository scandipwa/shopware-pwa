import { getTranslatedField } from '@scandipwa/framework/src/util/GetTranslatedField';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import ProductContext from '../../context/Product.context';
import ProductCoverComponent from './ProductCover.component';

/** @namespace Product/Component/ProductCover/Container/ProductCoverContainer */
export class ProductCoverContainer extends HigherOrderComponent {
    static contextType = ProductContext;

    containerProps = () => {
        /**
         * @type {React.ContextType<typeof ProductContext>}
         */
        const {
            product: {
                cover: {
                    media: {
                        thumbnails
                    },
                    media
                }
            }
        } = this.context;

        // TODO: move to product context ???
        const [img, ...sources] = thumbnails.sort(({ width: A }, { width: B }) => A - B);

        return {
            img,
            sources,
            alt: getTranslatedField(media, 'title')
        };
    };
}

export default withHOC(ProductCoverContainer, ProductCoverComponent);
