/* eslint-disable react/no-unused-state */
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { login, register } from '../../api/Auth.request';
import { CONTEXT_TOKEN_KEY } from '../../plugin/Client.plugin';
import AuthContext from './Auth.context';

/** @namespace ShopwareAuth/Context/Auth/Provider/AuthProvider */
export class AuthProvider extends PureComponent {
    state = {};

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    register = async (formData) => {
        const {
            street,
            zipcode,
            countryId,
            city,
            ...customer
        } = formData;

        const body = {
            billingAddress: {
                street,
                zipcode,
                countryId,
                city
            },
            ...customer
        };

        try {
            const customer = register(body);

            this.setState({ customer });

            return customer;
        } catch (error) {
            console.error(error);
            // TODO notify
        }

        return null;
    };

    login = async (formData) => {
        try {
            const { contextToken: token } = await login(formData);

            this.setState({ token });
            BrowserDatabase.setItem(CONTEXT_TOKEN_KEY, token);

            return token;
        } catch (error) {
            console.error(error);
            // TODO notify
        }

        return null;
    };

    getContextValue = () => ({
        register: this.register.bind(this),
        login: this.login.bind(this)
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
