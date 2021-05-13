import { PureComponent } from 'react';

import { CountriesType, SalutationsType } from '../../type/common';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';

/** @namespace ShopwareAuth/Component/AuthenticationPage/Component/AuthenticationPageComponent */
export class AuthenticationPageComponent extends PureComponent {
    static propTypes = {
        countries: CountriesType.isRequired,
        salutations: SalutationsType.isRequired
    };

    render() {
        const { countries, salutations } = this.props;

        return (
            <div>
                <LoginForm />
                <RegistrationForm
                  countries={ countries }
                  salutations={ salutations }
                />
            </div>
        );
    }
}

export default AuthenticationPageComponent;
