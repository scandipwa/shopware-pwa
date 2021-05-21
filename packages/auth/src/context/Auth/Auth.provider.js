/* eslint-disable react/no-unused-state */
import ContextContext from '@scandipwa/context/src/context/ShopwareContext/ShopwareContext.context';
import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';
import { ContextProvider, withContexts, withProvider } from '@scandipwa/framework/src/util/Context';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { login, register } from '../../api/Auth.request';
import AuthContext from './Auth.context';

/** @namespace Auth/Context/Auth/Provider/AuthProvider */
export class AuthProvider extends ContextProvider {
    state = {
        customer: {}
    };

    getFakeGuestRegisterData = () => {
        const {
            [NextPageContext.displayName]: {
                props: {
                    countries,
                    salutations
                }
            }
        } = this.props;

        return {
            guest: true,
            billingAddress: {
                street: '-',
                zipcode: '-',
                countryId: countries[0].id,
                city: '-'
            },
            email: 'guest@example.com',
            salutationId: salutations[0].id,
            firstName: 'Guest',
            lastName: 'User'
        };
    };

    async registerGuest() {
        const {
            [ContextContext.displayName]: {
                refreshContext
            }
        } = this.props;

        try {
            const customer = await register(this.getFakeGuestRegisterData());
            this.setState({ customer });
            await refreshContext();
            return customer;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
            return {};
        }
    }

    async register(registerData) {
        const {
            [ContextContext.displayName]: {
                refreshContext
            }
        } = this.props;

        try {
            const customer = await register({
                ...registerData,
                guest: false
            });

            this.setState({ customer });
            await refreshContext();
            return customer;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
            return {};
        }
    }

    async login(loginData) {
        const {
            [ContextContext.displayName]: {
                refresh
            }
        } = this.props;

        try {
            await login(loginData);
            await refresh();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }

    getContextValue = () => {
        const { customer, token } = this.state;

        return {
            registerGuest: this.register.bind(this),
            register: this.register.bind(this),
            login: this.login.bind(this),
            customer,
            token
        };
    };
}

export default withContexts(
    withProvider(AuthProvider, AuthContext.Provider),
    [
        NextPageContext,
        ContextContext
    ]
);
