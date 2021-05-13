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

    /**
     *
     * @param {import('@scandipwa/product/src/api/Product.type').Thumbnail} thumbnail
     */
    renderThumbnail = (thumbnail) => (
        <source
          key={ thumbnail.id }
          srcSet={ thumbnail.url }
          width={ thumbnail.width }
          height={ thumbnail.height }
        />
    );

    renderThumbnails() {
        const { product: { cover: { media: { thumbnails, translated: { title } } } } } = this.getContextValue();
        const smallThumbnail = thumbnails[thumbnails.length - 1];

        return (
            <picture>
                { thumbnails.map(this.renderThumbnail) }
                <img
                  src={ smallThumbnail.url }
                  width={ smallThumbnail.width }
                  height={ smallThumbnail.height }
                  alt={ title }
                />
            </picture>
        );
    }

    render() {
        return (
            <div>
                { this.renderThumbnails() }
            </div>
        );
    }
}

export default ProductMediaComponent;
