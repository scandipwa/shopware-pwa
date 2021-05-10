import { PureComponent } from 'react';

import RegistrationComponent from './Registration.component';
import RegistrationProvider from './Registration.provider';

/** @namespace ShopwareAuth/Component/Registration/Container/RegistrationContainer */
export class RegistrationContainer extends PureComponent {
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

export default RegistrationContainer;
