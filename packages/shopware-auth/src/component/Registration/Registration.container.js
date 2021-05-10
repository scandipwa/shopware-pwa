import { PureComponent } from 'react';

import RegistrationComponent from './Registration.component';
import RegistrationProvider from './Registration.provider';

/** @namespace ShopwareAuth/Component/Registration/Container/RegistrationContainer */
export class RegistrationContainer extends PureComponent {
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <RegistrationProvider>
                <RegistrationComponent />
            </RegistrationProvider>
        );
    }
}

export default RegistrationContainer;
