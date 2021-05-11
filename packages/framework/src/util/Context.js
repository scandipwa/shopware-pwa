/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */

import PropTypes from 'prop-types';
import { createElement, PureComponent } from 'react';

/** @namespace Framework/Util/Context/ContextProvider */
export class ContextProvider extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        provider: PropTypes.any.isRequired
    };

    getContextValue() {
        return {};
    }

    render() {
        const { children, provider } = this.props;

        return createElement(
            provider,
            {
                value: this.getContextValue()
            },
            children
        );
    }
}

/** @namespace Framework/Util/Context/withProvider */
export const withProvider = (ProviderComponent, ContextProvider) => {
    const withComponent = (props) => (
        <ProviderComponent
          { ...props }
          provider={ ContextProvider }
        />
    );

    withComponent.displayName = 'withContexts';

    return withComponent;
};

/** @namespace Framework/Util/Context/withContexts */
export const withContexts = (Component, contextOrContexts = []) => {
    const withComponent = (props) => {
        const contextArray = Array.isArray(contextOrContexts) ? contextOrContexts : [contextOrContexts];

        const combinedConsumer = contextArray.reduce(
            (acc, Context) => (value) => (
                <Context.Consumer>
                    { /** merge them into one object (is that safe? */ }
                    { (contextValue) => {
                        const key = Context.displayName;

                        if (!key) {
                            throw new Error('"withContexts" expects "named" contexts only.');
                        }

                        return acc({ ...value, [key]: contextValue });
                    } }
                </Context.Consumer>
            ),
            (value) => <Component { ...value } />
        );

        return combinedConsumer(props);
    };

    withComponent.displayName = 'withContexts';

    return withComponent;
};
