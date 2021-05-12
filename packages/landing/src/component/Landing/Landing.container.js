import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import LandingProvider from '../../context/Landing.provider';
import LandingComponent from './Landing.component';

/** @namespace Landing/Component/Landing/Container/LandingContainer */
export class LandingContainer extends HigherOrderComponent {
    render() {
        const { landing } = this.props;

        return (
            <LandingProvider landing={ landing }>
                { super.render() }
            </LandingProvider>
        );
    }
}

export default withHOC(LandingContainer, LandingComponent);
