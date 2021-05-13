/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
import ProductContext from '@scandipwa/product/src/context/Product.context';
import { PureComponent } from 'react';

/** @namespace Productui/Component/ProductMedia/Component/ProductMediaComponent */
export class ProductMediaComponent extends PureComponent {
    static contextType = ProductContext;

    /**
     * @returns {React.ContextType<typeof ProductContext>}
     */
    getContextValue() {
        return this.context;
    }

    renderThumbnail() {
        const { product: { cover: { media: { thumbnails, translated: { title } } } } } = this.getContextValue();

        const thumbnail = thumbnails.sort((a, b) => a.width - b.width).shift();

        return (
            <img src={ thumbnail.url } aria-label={ title } />
        );
    }

    render() {
        return (
            <div>
                { this.renderThumbnail() }
            </div>
        );
    }
}

export default ProductMediaComponent;
