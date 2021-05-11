import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import RegistrationComponent from './RegistrationForm.component';

/** @namespace ShopwareAuth/Component/RegistrationForm/Container/RegistrationFormContainer */
export class RegistrationFormContainer extends HigherOrderComponent {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        street_address: '',
        postal_code: '',
        city: '',
        salutation: '',
        country: ''
    };

    containerFunctions = {
        handleChange: this.props[AuthContext.displayName].handleInputChange,
        handleSubmit: this.handleSubmit.bind(this)
    };

    containerProps = () => {
        const {
            salutations = [],
            countries = []
        } = this.props;

        return {
            salutations,
            countries,
            handleChange: this.handleChange.bind(this),
            ...this.state
        };
    };

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        const { [AuthContext.displayName]: { register } } = this.props;

        event.preventDefault();

        register({ ...this.state });
    }
}

export default withHOC(
    withContexts(RegistrationFormContainer, AuthContext),
    RegistrationComponent
);
