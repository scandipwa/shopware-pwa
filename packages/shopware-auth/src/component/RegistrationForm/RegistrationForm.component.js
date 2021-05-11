import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace ShopwareAuth/Component/RegistrationForm/Component/RegistrationFormComponent */
export class RegistrationFormComponent extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        salutations: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                displayName: PropTypes.string
            })
        ).isRequired,
        countries: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                translated: PropTypes.shape({ name: PropTypes.string })
            })
        ).isRequired,
        enteredValues: PropTypes.shape({}).isRequired
    };

    renderSelectDropdown(name, collection, mapper) {
        const { handleChange, enteredValues } = this.props;

        return (
            <label htmlFor={ name }>
                <select
                  name={ name }
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={ (event) => handleChange(name, event.target.value) }
                  value={ enteredValues[name] }
                >
                    { collection.map((item) => {
                        const { value, displayName } = mapper(item);

                        return (
                            <option
                              key={ value }
                              value={ value }
                            >
                                { displayName }
                            </option>
                        );
                    }) }
                </select>
            </label>
        );
    }

    renderInput(name, placeholder, type = 'text') {
        const {
            handleChange,
            enteredValues: {
                [name]: value
            }
        } = this.props;

        return (
            <label htmlFor={ name }>
                <input
                  type={ type }
                  name={ name }
                  placeholder={ placeholder }
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={ (event) => handleChange(name, event.target.value) }
                  value={ value }
                />
            </label>
        );
    }

    renderCustomerBlock() {
        const {
            salutations
        } = this.props;

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
        } = this.props;

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
