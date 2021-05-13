/* eslint-disable react/no-unused-state */
import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import BrowserDatabase from '@scandipwa/framework/src/util/BrowserDatabase';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { login, register } from '../../api/Auth.request';
import { CONTEXT_TOKEN_KEY } from '../../plugin/Client.plugin';
import AuthContext from './Auth.context';

/** @namespace ShopwareAuth/Context/Auth/Provider/getFakeGuestData */
export const getFakeGuestData = (salutationId, countryId) => ({
    billingAddress: {
        street: '-',
        zipcode: '-',
        countryId,
        city: '-'
    },
    email: 'guest@example.com',
    salutationId,
    firstName: 'Guest',
    lastName: 'User'
});

/** @namespace ShopwareAuth/Context/Auth/Provider/AuthProvider */
export class AuthProvider extends PureComponent {
    state = {};

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    register = async (formData) => {
        const {
            [NextPageContext.displayName]: {
                props: {
                    countries,
                    salutations
                }
            }
        } = this.props;

        const {
            guest = false,
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
            ...customer,
            ...(guest
                ? getFakeGuestData(salutations[0].id, countries[0].id)
                : {}
            ),
            guest
        };

        try {
            const customer = await register(body);

            const token = BrowserDatabase.getItem(CONTEXT_TOKEN_KEY);

            this.setState({ customer, token });

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

    getContextValue = () => {
        const { customer, token } = this.state;

        return {
            register: this.register.bind(this),
            login: this.login.bind(this),
            customer,
            token
        };
    };

    render() {
        const { children } = this.props;

        return (
            <AuthContext.Provider value={ this.getContextValue() }>
                { children }
            </AuthContext.Provider>
        );
    }
}

export default withContexts(AuthProvider, [NextPageContext]);
