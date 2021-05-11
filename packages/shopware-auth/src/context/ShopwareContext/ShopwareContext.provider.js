/* eslint-disable react/no-unused-state */
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { getShopwareContext } from '../../api/Context.request';
import ShopwareContextContext from './ShopwareContext.context';

/** @namespace ShopwareAuth/Context/ShopwareContext/Provider/ShopwareContextProvider */
export class ShopwareContextProvider extends PureComponent {
    state = {};

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    async componentDidMount() {
        const context = await getShopwareContext();

        BrowserDatabase.setItem(
            'sw-context-token',
            context.token
        );

        this.setState({
            ...context
        });
    }

    getContextValue = () => this.state;

    render() {
        const { children } = this.props;

        return (
            <ShopwareContextContext.Provider value={ this.getContextValue() }>
                { children }
            </ShopwareContextContext.Provider>
        );
    }
}

export default ShopwareContextProvider;
