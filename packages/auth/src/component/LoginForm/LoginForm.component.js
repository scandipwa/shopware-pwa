import Form from '@scandipwa/framework/src/component/Form';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Auth/Component/LoginForm/Component/LoginFormComponent */
export class LoginFormComponent extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    // eslint-disable-next-line @scandipwa/scandipwa-guidelines/only-render-in-component
    getFields() {
        return {
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
            onSubmit
        } = this.props;

        return (
            <Form
              fieldConfiguration={ this.getFields() }
              onFormSubmit={ onSubmit }
              renderActions={ this.renderActions }
              renderFields={ this.renderFields }
            />
        );
    }
}

export default LoginFormComponent;
