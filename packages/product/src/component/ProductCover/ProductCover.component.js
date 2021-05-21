import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Product/Component/ProductCover/Component/ProductCoverComponent */
export class ProductCoverComponent extends PureComponent {
    static propTypes = {
        img: PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number
        }).isRequired,
        sources: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number
        })).isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        alt: PropTypes.any
    };

    static defaultProps = {
        alt: ''
    };

    /**
     *
     * @param {import('@scandipwa/product/src/api/Product.type').Thumbnail} source
     */
    renderSource = (source) => (
        <source
          key={ source.id }
          srcSet={ source.url }
          width={ source.width }
          height={ source.height }
        />
    );

    renderSources() {
        const { sources } = this.props;
        return sources.map(this.renderSource);
    }

    renderImage = () => {
        const { img, alt } = this.props;

        return (
            <img
              src={ img.url }
              width={ img.width }
              height={ img.height }
              alt={ alt }
            />
        );
    };

    renderCover() {
        return (
            <picture>
                { this.renderSources() }
                { this.renderImage() }
            </picture>
        );
    }

    render() {
        return this.renderCover();
    }
}

export default ProductCoverComponent;
