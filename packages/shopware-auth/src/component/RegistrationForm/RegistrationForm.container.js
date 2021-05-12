import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import RegistrationComponent from './RegistrationForm.component';

/** @namespace ShopwareAuth/Component/RegistrationForm/Container/RegistrationFormContainer */
export class RegistrationFormContainer extends HigherOrderComponent {
    state = {
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

    containerFunctions = {
        handleChange: this.props[AuthContext.displayName].handleInputChange,
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
            handleChange: this.handleChange.bind(this),
            ...this.state
        };
    };

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        const {
            [AuthContext.displayName]: { register }
        } = this.props;

        event.preventDefault();

        register({ ...this.state });
    }
}

export default withHOC(
    withContexts(
        RegistrationFormContainer,
        [AuthContext]
    ),
    RegistrationComponent
);
