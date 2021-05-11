import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import RegistrationContext from './RegistrationForm.context';

/** @namespace ShopwareAuth/Component/RegistrationForm/Component/RegistrationFormComponent */
export class RegistrationFormComponent extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    static contextType = RegistrationContext;

    renderSelectDropdown(name, collection, mapper) {
        return (
            <label htmlFor={ name }>
                <select name={ name }>
                    { collection.map((item) => {
                        const { value, displayName } = mapper(item);

                        return <option key={ value } value={ value }>{ displayName }</option>;
                    }) }
                </select>
            </label>
        );
    }

    renderInput(name, placeholder, type = 'text') {
        return (
            <label htmlFor={ name }>
                <input
                  type={ type }
                  name={ name }
                  placeholder={ placeholder }
                />
            </label>
        );
    }

    renderCustomerBlock() {
        const {
            salutations
        } = this.context;

        return (
            <div>
                { this.renderSelectDropdown(
                    'salutation',
                    salutations,
                    (salutation) => ({
                        value: salutation.id,
                        displayName: salutation.displayName
                    })
                ) }

                { this.renderInput('first_name', 'First name') }
                { this.renderInput('last_name', 'Last name') }
                { this.renderInput('email', 'Email') }
                { this.renderInput('password', 'Password', 'password') }
            </div>
        );
    }

    renderAddressBlock() {
        const {
            countries
        } = this.context;

        return (
            <div>
                { this.renderInput('street_address', 'Street address') }
                { this.renderInput('postal_code', 'Postal code') }
                { this.renderInput('city', 'City') }
                { this.renderSelectDropdown(
                    'country',
                    countries,
                    (country) => ({
                        value: country.id,
                        displayName: country.translated.name
                    })
                ) }
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form
              onSubmit={ handleSubmit }
            >
                { this.renderCustomerBlock() }
                { this.renderAddressBlock() }
                { /* TODO Shipping and billing addresses do not match */ }
                <button type="submit">Continue</button>
            </form>
        );
    }
}

export default RegistrationFormComponent;