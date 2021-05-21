import { createSortedMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';

import AbstractForm from '../AbstractForm';

/** @namespace Auth/Component/RegistrationForm/Component/RegistrationFormComponent */
export class RegistrationFormComponent extends AbstractForm {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onFieldChange: PropTypes.func.isRequired,
        fieldValues: PropTypes.shape({}),
        salutationOptions: PropTypes.arrayOf(),
        countriesOptions: PropTypes.arrayOf()
    };

    fields = createSortedMap({});

    // addressBlockFields = createSortedRenderMap([
    //     this.renderInput.bind(this, 'street', 'Street address'),
    //     this.renderInput.bind(this, 'zipcode', 'Postal code'),
    //     this.renderInput.bind(this, 'city', 'City'),
    //     this.renderSelectDropdown.bind(this, 'countryId', this.props.salutationOptions)
    // ]);

    // customerBlockFields = createSortedRenderMap([
    //     this.renderSelectDropdown.bind(this, 'salutationId', this.props.salutationOptions),
    //     this.renderInput.bind(this, 'firstName', 'First name'),
    //     this.renderInput.bind(this, 'lastName', 'Last name'),
    //     this.renderInput.bind(this, 'email', 'Email'),
    //     this.renderInput.bind(this, 'password', 'Password', 'password')
    // ]);

    renderCustomerBlock() {
        return this.customerBlockFields.render();
    }

    renderAddressBlock() {
        return this.addressBlockFields.render();
    }

    renderActions() {
        return (
            <button type="submit">Continue</button>
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form
              onSubmit={ handleSubmit }
              className="RegistrationForm"
            >
                { this.fieldRenderMap.render() }
                { /* TODO Shipping and billing addresses do not match */ }
                { this.renderActions() }
            </form>
        );
    }
}

export default RegistrationFormComponent;
