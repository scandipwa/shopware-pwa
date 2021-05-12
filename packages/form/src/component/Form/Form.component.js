import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Layout/Component/Form/Component/FormComponent */
export class FormComponent extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    render() {
        const {
            children,
            handleSubmit
        } = this.props;

        return (
            <form onSubmit={ handleSubmit }>
                { children }
            </form>
        );
    }
}

export default PureComponent;
