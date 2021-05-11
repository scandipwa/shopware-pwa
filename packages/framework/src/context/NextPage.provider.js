import PropTypes from 'prop-types';

import { ContextProvider, withProvider } from '../util/Context';
import NextPageContext from './NextPage.context';

/** @namespace Framework/Context/NextPage/Provider/NextPageProvider */
export class NextPageProvider extends ContextProvider {
    static propTypes = {
        ...ContextProvider.propTypes,
        // TODO: Figure out a way to dinamically declare prop types
        props: PropTypes.shape({}).isRequired
    };

    getContextValue() {
        const { props } = this.props;

        return {
            ...super.getContextValue(),
            props
        };
    }
}

export default withProvider(NextPageProvider, NextPageContext.Provider);
