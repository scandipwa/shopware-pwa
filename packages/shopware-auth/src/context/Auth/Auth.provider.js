/* eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { register } from '../../api/Auth.request';
import AuthContext from './Auth.context';

/** @namespace ShopwareAuth/Context/Auth/Provider/AuthProvider */
export class AuthProvider extends PureComponent {
    state = {};

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    register = register;

    getContextValue = () => ({
        register: this.register.bind(this)
    });

    render() {
        const { children } = this.props;

        return (
            <AuthContext.Provider value={ this.getContextValue() }>
                { children }
            </AuthContext.Provider>
        );
    }
}

export default AuthProvider;
