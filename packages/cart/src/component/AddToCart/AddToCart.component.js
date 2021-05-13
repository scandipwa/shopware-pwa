import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Cart/Component/AddToCart/Component/AddToCartComponent */
export class AddToCartComponent extends PureComponent {
    static propTypes = {
        handleClick: PropTypes.func.isRequired
    };

    renderButtonContent() {
        return 'Add to cart';
    }

    render() {
        const { handleClick } = this.props;

        return (
            <button onClick={ handleClick }>
                { this.renderButtonContent() }
            </button>
        );
    }
}

export default AddToCartComponent;
