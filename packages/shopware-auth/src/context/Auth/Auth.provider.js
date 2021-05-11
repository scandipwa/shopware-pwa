/* eslint-disable react/no-unused-state */
import client from '@scandipwa/framework/src/util/Client';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import AuthContext from './Auth.context';

/** @namespace ShopwareAuth/Context/Auth/Provider/AuthProvider */
export class AuthProvider extends PureComponent {
    state = {};

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const { children } = this.props;

        return (
            <AuthContext.Provider value={ this.state }>
                { children }
            </AuthContext.Provider>
        );
    }
}

export default AuthProvider;
