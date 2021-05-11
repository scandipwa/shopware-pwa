import { PureComponent } from 'react';

import RegistrationComponent from './Registration.component';
import RegistrationProvider from './Registration.provider';

/** @namespace ShopwareAuth/Component/RegistrationForm/Container/RegistrationFormContainer */
export class RegistrationFormContainer extends PureComponent {
    containerFunctions = {
        handleSubmit: this.handleSubmit.bind(this)
    };

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <RegistrationProvider>
                <RegistrationComponent
                  { ...this.containerFunctions }
                />
            </RegistrationProvider>
        );
    }
}

export default RegistrationFormContainer;
