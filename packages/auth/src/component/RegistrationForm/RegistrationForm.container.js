import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import RegistrationFormComponent from './RegistrationForm.component';

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
    containerFunctions = {
        onSubmit: this.onSubmit.bind(this)
    };

    getBillingAddressFromFieldValues(fieldValues) {
        const {
            street,
            zipcode,
            countryId,
            city
        } = fieldValues;

        return {
            street,
            zipcode,
            countryId,
            city
        };
    }

    getCustomerFromFieldValues(fieldValues) {
        const {
            firstName,
            lastName,
            email,
            password
        } = fieldValues;

        return {
            firstName,
            lastName,
            email,
            password
        };
    }

    async onSubmit(fieldValues) {
        const {
            [AuthContext.displayName]: { register }
        } = this.props;

        await register({
            billingAddress: this.getBillingAddressFromFieldValues(fieldValues),
            ...this.getCustomerFromFieldValues(fieldValues)
        });
    }

    getInitialValues() {
        const {
            [NextPageContext.displayName]: {
                salutations,
                countries
            }
        } = this.props;

        return {
            ...INITIAL_REGISTRATION_FORM_STATE,
            salutationId: salutations[0].id,
            countryId: countries[0].id
        };
    }

    containerProps = () => ({
        initialValues: this.getInitialValues(),
        salutationOptions: this.getSalutationOptions(),
        countriesOptions: this.getCountryOptions()
    });
}

export default withHOC(
    withContexts(
        RegistrationFormContainer,
        [
            AuthContext,
            NextPageContext
        ]
    ),
    RegistrationFormComponent
);
