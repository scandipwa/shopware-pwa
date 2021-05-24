import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import LoginFormComponent from './LoginForm.component';

export const INITIAL_REGISTRATION_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    street: '',
    zipcode: '',
    city: '',
    salutationId: '',
    countryId: ''
};

/** @namespace Auth/Component/LoginForm/Container/LoginFormContainer */
export class LoginFormContainer extends HigherOrderComponent {
    containerFunctions = {
        onSubmit: this.onSubmit.bind(this)
    };

    async onSubmit(fieldValues) {
        const {
            [AuthContext.displayName]: { login }
        } = this.props;

        await login(fieldValues);
    }
}

export default withHOC(
    withContexts(
        LoginFormContainer,
        [AuthContext]
    ),
    LoginFormComponent
);
