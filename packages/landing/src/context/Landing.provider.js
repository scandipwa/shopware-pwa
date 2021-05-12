/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import LandingContext from './Landing.context';

/** @namespace Landing/Context/Landing/Provider/LandingProvider */
export class LandingProvider extends ContextProvider {
    static propTypes = {
        ...ContextProvider.propTypes,
        landing: PropTypes.shape({}).isRequired
    };

    getContextValue() {
        const { landing } = this.props;
        return {
            ...super.getContextValue(),
            landing
        };
    }
}

export default withProvider(LandingProvider, LandingContext.Provider);
