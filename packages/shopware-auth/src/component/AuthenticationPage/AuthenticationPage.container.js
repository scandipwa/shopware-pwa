import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import AuthenticationPageComponent from './AuthenticationPage.component';

/** @namespace ShopwareAuth/Component/AuthenticationPage/Container/AuthenticationPageContainer */
export class AuthenticationPageContainer extends HigherOrderComponent {
    containerProps = () => {
        const {
            [NextPageContext.displayName]: {
                props: {
                    salutations = [],
                    countries = []
                }
            }
        } = this.props;

        return {
            salutations,
            countries
        };
    };
}

export default withHOC(
    withContexts(
        AuthenticationPageContainer,
        [NextPageContext]
    ),
    AuthenticationPageComponent
);
