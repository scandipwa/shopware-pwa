import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import LoginFormComponent from './LoginForm.component';

export const INITIAL_LOGIN_FORM_STATE = {
    username: '',
    password: ''
};

/** @namespace ShopwareAuth/Component/LoginForm/Container/LoginFormContainer */
export class LoginFormContainer extends HigherOrderComponent {
    state = INITIAL_LOGIN_FORM_STATE;

    containerFunctions = {
        handleChange: this.handleChange.bind(this),
        handleSubmit: this.handleSubmit.bind(this)
    };

    containerProps = () => this.state;

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        const {
            [AuthContext.displayName]: { login }
        } = this.props;

        event.preventDefault();

        const token = await login({ ...this.state });

        if (!token) {
            return;
        }

        this.setState(INITIAL_LOGIN_FORM_STATE);
    }
}

export default withHOC(
    withContexts(
        LoginFormContainer,
        [AuthContext]
    ),
    LoginFormComponent
);
