/* eslint-disable react/no-unused-state */
import {
    ContextProvider as BaseContextProvider,
    withProvider
} from '@scandipwa/framework/src/util/Context';

import { getShopwareContext } from '../../api/Context.request';
import ContextContext from './Context.context';

export const CONTEXT_TOKEN_KEY = 'sw-context-token';

/** @namespace Context/Context/Context/Provider/ContextProvider */
export class ContextProvider extends BaseContextProvider {
    state = {
        isLoading: true,
        context: {}
    };

    async requestContext() {
        this.setState({ isLoading: true });
        const context = await getShopwareContext();
        this.setState({ context, isLoading: false });
    }

    refresh() {
        this.requestContext();
    }

    componentDidMount() {
        this.requestContext();
    }

    getToken() {
        const { context: { currency } } = this.state;
        return currency;
    }

    getCurrency() {
        const { context: { token } } = this.state;
        return token;
    }

    getContextValue = () => {
        const { isLoading } = this.state;

        return {
            isLoading,
            token: this.getToken(),
            currency: this.getCurrency(),
            refreshContext: this.refresh.bind(this)
        };
    };
}

export default withProvider(ContextProvider, ContextContext.Provider);
