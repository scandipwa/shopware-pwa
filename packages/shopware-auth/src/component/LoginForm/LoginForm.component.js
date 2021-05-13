import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';

import AbstractForm from '../AbstractForm';

/** @namespace ShopwareAuth/Component/LoginForm/Component/LoginFormComponent */
export class LoginFormComponent extends AbstractForm {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    fieldRenderMap = createSortedRenderMap([
        this.renderInput.bind(this, 'username', 'Login'),
        this.renderInput.bind(this, 'password', 'Password', 'password')
    ]);

    render() {
        const { handleSubmit } = this.props;

        return (
            <form
              onSubmit={ handleSubmit }
              className="LoginForm"
            >
                <p>Login</p>
                <div>
                    { this.fieldRenderMap.render() }
                </div>
                <button type="submit">Continue</button>
            </form>
        );
    }
}

export default LoginFormComponent;
