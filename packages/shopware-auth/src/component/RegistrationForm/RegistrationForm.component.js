import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';

import { CountriesType, SalutationsType } from '../../type/common';
import RegistrationFormAbstract from '../AbstractForm';

/** @namespace ShopwareAuth/Component/RegistrationForm/Component/RegistrationFormComponent */
export class RegistrationFormComponent extends RegistrationFormAbstract {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        salutations: SalutationsType,
        countries: CountriesType
    };

    fieldRenderMap = createSortedRenderMap([
        this.renderCustomerBlock.bind(this),
        this.renderAddressBlock.bind(this)
    ]);

    addressBlockFields = createSortedRenderMap([
        this.renderInput.bind(this, 'street', 'Street address'),
        this.renderInput.bind(this, 'zipcode', 'Postal code'),
        this.renderInput.bind(this, 'city', 'City'),
        this.renderSelectDropdown.bind(
            this,
            'countryId',
            // eslint-disable-next-line react/destructuring-assignment
            this.props.countries,
            (country) => ({
                value: country.id,
                displayName: country.translated.name
            })
        )
    ]);

    customerBlockFields = createSortedRenderMap([
        this.renderSelectDropdown.bind(
            this,
            'salutationId',
            // eslint-disable-next-line react/destructuring-assignment
            this.props.salutations,
            (salutation) => ({
                value: salutation.id,
                displayName: salutation.displayName
            })
        ),
        this.renderInput.bind(this, 'firstName', 'First name'),
        this.renderInput.bind(this, 'lastName', 'Last name'),
        this.renderInput.bind(this, 'email', 'Email'),
        this.renderInput.bind(this, 'password', 'Password', 'password')
    ]);

    renderCustomerBlock() {
        return (
            <div className="RegistrationForm-CustomerBlock">
                <p>I am a new customer</p>
                { this.customerBlockFields.render() }
            </div>
        );
    }

    renderAddressBlock() {
        return (
            <div className="RegistrationForm-AddressBlock">
                <p>Address</p>
                { this.addressBlockFields.render() }
            </div>
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
                <button type="submit">Continue</button>
            </form>
        );
    }
}

export default RegistrationFormComponent;
