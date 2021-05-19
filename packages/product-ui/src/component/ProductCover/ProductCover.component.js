/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
import ProductContext from '@scandipwa/product/src/context/Product.context';
import { PureComponent } from 'react';

/** @namespace Productui/Component/ProductCover/Component/ProductCoverComponent */
export class ProductCoverComponent extends PureComponent {
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
          media={ `(min-width: ${thumbnail.width}px)` }
        />
    );

    renderThumbnails() {
        const {
            product: {
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
            }
        } = this.getContextValue();

        const smallThumbnail = thumbnails[thumbnails.length - 1];
        const sortedThumbnails = thumbnails.sort((a, b) => b.width - a.width);

        return (
            <picture>
                { sortedThumbnails.map(this.renderThumbnail) }
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

export default ProductCoverComponent;
