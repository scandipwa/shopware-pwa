import Form from '@scandipwa/framework/src/component/Form';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Auth/Component/RegistrationForm/Component/RegistrationFormComponent */
export class RegistrationFormComponent extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        initialValues: PropTypes.shape({}).isRequired,
        salutationOptions: PropTypes.arrayOf().isRequired,
        countriesOptions: PropTypes.arrayOf().isRequired
    };

    // eslint-disable-next-line @scandipwa/scandipwa-guidelines/only-render-in-component
    getFields() {
        const {
            countriesOptions,
            salutationOptions
        } = this.props;

        return {
            street: {
                type: 'input',
                fieldProps: { label: 'Street address' }
            },
            zipcode: {
                type: 'input',
                fieldProps: { label: 'Postal code' }
            },
            city: {
                type: 'input',
                fieldProps: { label: 'City' }
            },
            countryId: {
                type: 'select',
                inputProps: { options: countriesOptions },
                fieldProps: { label: 'Country' }
            },
            salutationId: {
                type: 'select',
                inputProps: { options: salutationOptions },
                fieldProps: { label: 'Salutation' }
            },
            firstName: {
                type: 'input',
                fieldProps: { label: 'First name' }
            },
            lastName: {
                type: 'input',
                fieldProps: { label: 'Last name' }
            },
            email: {
                type: 'input',
                fieldProps: { label: 'Email' }
            },
            password: {
                type: 'input',
                fieldProps: { label: 'Password' }
            }
        };
    }

    renderFields(fields, defaultRenderer) {
        return Array.from(fields.entries(), defaultRenderer);
    }

    renderActions() {
        return (
            <button type="submit">Continue</button>
        );
    }

    render() {
        const {
            onSubmit,
            initialValues
        } = this.props;

        return (
            <Form
              fieldConfiguration={ this.getFields() }
              onFormSubmit={ onSubmit }
              initialFieldValues={ initialValues }
              renderActions={ this.renderActions }
              renderFields={ this.renderFields }
            />
        );
    }
}

export default RegistrationFormComponent;
