import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import Landing from '@scandipwa/landing/src/component/Landing';
import { PureComponent } from 'react';

/** @namespace SeoUrlLanding/Component/LandingPage/Component/LandingPageComponent */
export class LandingPageComponent extends PureComponent {
    static contextType = NextPageContext;

    render() {
        const { props: { landing } } = this.context;

        return (
            <Landing
              landing={ landing }
            />
        );
    }
}

export default LandingPageComponent;
