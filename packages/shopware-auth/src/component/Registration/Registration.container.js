import { PureComponent } from 'react';

import RegistrationComponent from './Registration.component';
import RegistrationProvider from './Registration.provider';

/** @namespace ShopwareAuth/Component/Registration/Container/RegistrationContainer */
export class RegistrationContainer extends PureComponent {
    containerFunctions = {
        handleSubmitSuccess: this.handleSubmitSuccess.bind(this),
        handleSubmitError: this.handleSubmitError.bind(this)
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

export default RegistrationContainer;
