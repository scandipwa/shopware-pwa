import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import LoginFormComponent from './LoginForm.component';

/** @namespace ShopwareAuth/Component/LoginForm/Container/LoginFormContainer */
export class LoginFormContainer extends HigherOrderComponent {
    state = {
        username: '',
        password: ''
    };

    containerFunctions = {
        handleChange: this.handleChange.bind(this),
        handleSubmit: this.handleSubmit.bind(this)
    };

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        const {
            [AuthContext.displayName]: { login }
        } = this.props;

        event.preventDefault();

        login({ ...this.state });
    }
}

export default withHOC(
    withContexts(
        LoginFormContainer,
        [AuthContext]
    ),
    LoginFormComponent
);
