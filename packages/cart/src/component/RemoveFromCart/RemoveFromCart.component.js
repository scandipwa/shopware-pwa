import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Cart/Component/RemoveFromCart/Component/RemoveFromCartComponent */
export class RemoveFromCartComponent extends PureComponent {
    static propTypes = {
        handleClick: PropTypes.func.isRequired
    };

    renderButtonContent() {
        return 'Remove from cart';
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

export default RemoveFromCartComponent;
