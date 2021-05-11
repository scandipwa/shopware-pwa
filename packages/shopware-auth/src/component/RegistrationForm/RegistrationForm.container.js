import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import { AuthContext } from '../../context/Auth';
import { RegistrationContext } from '../../context/Registration';
import RegistrationComponent from './RegistrationForm.component';

/** @namespace ShopwareAuth/Component/RegistrationForm/Container/RegistrationFormContainer */
export class RegistrationFormContainer extends HigherOrderComponent {
    containerFunctions = {
        handleChange: this.props[RegistrationContext.displayName].handleInputChange,
        handleSubmit: this.handleSubmit.bind(this)
    };

    containerProps = () => {
        const {
            [RegistrationContext.displayName]: {
                salutations,
                countries,
                enteredValues
            }
        } = this.props;

        return {
            salutations,
            countries,
            enteredValues
        };
    };

    handleSubmit(event) {
        const {
            [RegistrationContext.displayName]: {
                register
            }
        } = this.props;

        event.preventDefault();

        register();
    }
}

export default withHOC(
    withContexts(
        RegistrationFormContainer,
        [AuthContext, RegistrationContext]
    ),
    RegistrationComponent
);
