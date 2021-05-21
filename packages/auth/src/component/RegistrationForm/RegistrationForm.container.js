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

/** @namespace Auth/Component/RegistrationForm/Container/RegistrationFormContainer */
export class RegistrationFormContainer extends HigherOrderComponent {
    __construct(props) {
        super.__construct(props);

        const { salutations, countries } = this.props;

        this.state = {
            ...INITIAL_REGISTRATION_FORM_STATE,
            salutationId: salutations[0].id,
            countryId: countries[0].id
        };
    }

    containerFunctions = {
        handleChange: this.handleChange.bind(this),
        handleSubmit: this.handleSubmit.bind(this)
    };

    getSalutationOptions() {
        const { salutations = [] } = this.props;

        return salutations.map((salutation) => ({
            value: salutation.id,
            label: salutation.displayName
        }));
    }

    getCountryOptions() {
        const { countries = [] } = this.props;

        return countries.map((country) => ({
            value: country.id,
            label: country.translated.name
        }));
    }

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    getBillingAddressData() {
        const {
            street,
            zipcode,
            countryId,
            city
        } = this.state;

        return {
            street,
            zipcode,
            countryId,
            city
        };
    }

    getCustomerData() {
        const {
            firstName,
            lastName,
            email,
            password
        } = this.state;

        return {
            firstName,
            lastName,
            email,
            password
        };
    }

    async handleSubmit(event) {
        const {
            [AuthContext.displayName]: { register }
        } = this.props;

        event.preventDefault();

        const customer = await register({
            billingAddress: this.getBillingAddressData(),
            ...this.getCustomerData()
        });

        if (customer) {
            this.setState(INITIAL_REGISTRATION_FORM_STATE);
        }
    }

    containerProps = () => {
        const {
            salutations = [],
            countries = []
        } = this.props;

        return {
            salutations,
            countries,
            salutationOptions: this.getSalutationOptions(),
            countriesOptions: this.getCountryOptions()
        };
    };
}

export default withHOC(
    withContexts(
        RegistrationFormContainer,
        [AuthContext]
    ),
    RegistrationComponent
);
