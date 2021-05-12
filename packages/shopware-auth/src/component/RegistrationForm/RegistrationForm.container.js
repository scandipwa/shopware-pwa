import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import RegistrationComponent from './RegistrationForm.component';

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

/** @namespace ShopwareAuth/Component/RegistrationForm/Container/RegistrationFormContainer */
export class RegistrationFormContainer extends HigherOrderComponent {
    state = INITIAL_REGISTRATION_FORM_STATE;

    containerFunctions = {
        handleChange: this.handleChange.bind(this),
        handleSubmit: this.handleSubmit.bind(this)
    };

    componentDidMount() {
        const { salutations, countries } = this.props;

        this.handleChange('salutationId', salutations[0].id);
        this.handleChange('countryId', countries[0].id);
    }

    containerProps = () => {
        const {
            salutations = [],
            countries = []
        } = this.props;

        return {
            salutations,
            countries,
            ...this.state
        };
    };

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        const {
            [AuthContext.displayName]: { register }
        } = this.props;

        event.preventDefault();

        const customer = await register({ ...this.state });

        if (customer) {
            this.setState(INITIAL_REGISTRATION_FORM_STATE);
        }
    }
}

export default withHOC(
    withContexts(
        RegistrationFormContainer,
        [AuthContext]
    ),
    RegistrationComponent
);
