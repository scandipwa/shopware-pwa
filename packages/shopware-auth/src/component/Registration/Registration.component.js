import { PureComponent } from 'react';

import RegistrationContext from './Registration.context';

/** @namespace ShopwareAuth/Component/Registration/Component/RegistrationComponent */
export class RegistrationComponent extends PureComponent {
    static contextType = RegistrationContext;

    renderSelectDropdown(name, collection, mapper) {
        return (
            <label htmlFor={ name }>
                <select name={ name }>
                    { collection.map((item) => {
                        const { value, displayName } = mapper(item);

                        return <option value={ value }>{ displayName }</option>;
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
        return (
            <form onSubmit={ this.handleSubmit }>
                { this.renderCustomerBlock() }
                { this.renderAddressBlock() }
                { /* TODO Shipping and billing addresses do not match */ }
                <button type="submit">Continue</button>
            </form>
        );
    }
}

export default RegistrationComponent;
